import EntityProperties from "@properties/framework/EntityProperties";
import RoleTable from "@components/security/table/RoleTable";

export default class RoleProperties extends EntityProperties{

    static displayName = 'RoleProperties';
    
    buildTable = () => {
        return <RoleTable table={this.state.table} data={this.state.tableData} loading={this.state.loading} />
    }

}