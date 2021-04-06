import IssueOrderRequest from '@api/issue-order-manager/issue-lot-order/IssueOrderRequest';
import EntityScanViewTable from '@components/framework/table/EntityScanViewTable';
import { i18NCode } from '@const/i18n';
import I18NUtils from '@utils/I18NUtils';
import NoticeUtils from '@utils/NoticeUtils';
import { Button, Tag } from 'antd';

export default class IssueLotOrderScanTable extends EntityScanViewTable {

    static displayName = 'IssueLotOrderScanTable';

    getRowClassName = (record, index) => {
        if (record.rowClass) {
            return 'ban-row';
        }else if(record.scaned) {
            return 'scaned-row';
        }else {
            if(index % 2 ===0) {
                return 'even-row'; 
            } else {
                return ''; 
            }
        }
    }

    createButtonGroup = () => {
        let buttons = [];
        buttons.push(this.createScannedNumber());
        buttons.push(this.createMaterialLotsNumber());
        buttons.push(this.createIssueLotButton());
        return buttons;
    }

    createScannedNumber = () => {
        return <Tag color="#2db7f5" style={styles.tableButton} >{I18NUtils.getClientMessage(i18NCode.ScannedQty)}：{this.getScanedRows().length} </Tag>
    }

    createMaterialLotsNumber = () => {
        return <Tag color="#2db7f5" style={styles.tableButton} >{I18NUtils.getClientMessage(i18NCode.Qty)}：{this.state.data.length}</Tag>
    }
  

    createIssueLotButton = () => {
        return <Button key="receive" type="primary" className="table-button" icon="file-excel" onClick={this.IssueLot}>
                        {I18NUtils.getClientMessage(i18NCode.Issue)}
                    </Button>
    }

    IssueLot = () => {
        let self = this;
        let materialLots = this.getScanned();
        let flag = false;
        if (materialLots.length === 0) {
            NoticeUtils.showNotice(I18NUtils.getClientMessage(i18NCode.AddAtLeastOneRow));
            return;
        }

        materialLots.forEach(materialLot => {
            if(materialLot.status != "Wait"){
                flag = true;
                NoticeUtils.showNotice(I18NUtils.getClientMessage(i18NCode.PleaseStockOut) +":"+ materialLot.materialLotId);
                return;
            }
        })
        if(flag){
            return ;
        }
        self.setState({loading: true});
        let doc = this.props.orderTable.getSingleSelectedRow();
        let requestObject = {
            materialLots: materialLots,
            documentId:  doc.name,
            success: function(responseBody) {
                if (self.props.resetData) {
                    self.setState({
                        loading: false
                    });
                    self.props.resetData();
                    self.props.onSearch();
                }
                NoticeUtils.showSuccess();
            }
        }
        IssueOrderRequest.sendIssueLotRequest(requestObject);
    }
     /**
     * 接收数据不具备可删除等操作
     */
    buildOperationColumn = () => {
        
    }
    
}
const styles = {
    tableButton: {
        marginLeft:'20px'
    }
};