import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';

import HeaderAsideFooterResponsiveLayout from '@layouts/HeaderAsideFooterResponsiveLayout';
import BlankLayout from '@layouts/BlankLayout';

// framework
import EntityProperties from '@properties/framework/EntityProperties';
import EntityHistoryProperties from '@properties/framework/EntityHistoryProperties';
import GeneratorRuleProperties from '@properties/idgenerator/GeneratorRuleProperties';
import MessageProperties from '@properties/framework/MessageProperties';
import ParameterProperties from '@properties/framework/ParameterProperties';

//security
import UserProperties from '@properties/security/UserProperties';
import RoleProperties from '@properties/security/RoleProperties';

//kms
import QuestionProperties from '@properties/kms/QuestionProperties';

//mms
import AddPackagaMaterialLotProperties from '@properties/mms/AddPackagaMaterialLotProperties';
import UnPackagaMaterialLotProperties from '@properties/mms/UnPackagaMaterialLotProperties';
import QualityCheckProperties from '@properties/mms/QualityCheckProperties';
import OQCCheckProperties from '@properties/mms/OQCCheckProperties';
import PackageMaterialLotProperties from '@properties/mms/PackageMaterialLotProperties';
import MaterialLotProperties from '@properties/mms/MaterialLotProperties';
import MaterialStatusModelProperties from '@properties/mms/MaterialStatusModelProperties';
import MaterialProperties from '@properties/mms/MaterialProperties';
import MaterialLotStockInProperties from '@properties/mms/MaterialLotStockInProperties';
import MaterialLotInventoryProperties from '@properties/mms/MaterialLotInventoryProperties';
import IncomingMaterialImportProperties from '@properties/mms/IncomingMaterialImportProperties';
import IncomingMaterialReceiveProperties from '@properties/mms/IncomingMaterialReceiveProperties';
import IssueLotOrderProperties from '@properties/mms/IssueLotOrderProperties';
import IncomingMLotImportProperties from '@properties/mms/IncomingMLotImportProperties';
import IncomingMaterialDeleteProperties from '@properties/mms/IncomingMaterialDeleteProperties';
import IssueMaterialOrderProperties from '@properties/mms/IssueMaterialOrderProperties';
import ReturnMLotOrderProperties from '@properties/mms/ReturnMLotOrderProperties';
import SplitMaterialLotProperties from '@properties/mms/SplitMaterialLotProperties';

//gc
import GcCheckProperties from '@properties/gc/GcCheckProperties';
import GcMaterialLotStockInProperties from '@properties/gc/GcMaterialLotStockInProperties';
import MesFinishGoodProperties from '@properties/gc/MesFinishGoodProperties';
import GcOrderProperties from '@properties/gc/GcOrderProperties';
import PackCaseCheckProperties from '@properties/gc/PackCaseCheckProperties';
import GcPrintCaseLabelProperties from '@properties/gc/GcPrintCaseLabelProperties';
import GcReTestOrderProperties from '@properties/gc/GcReTestOrderProperties';

//rms
import EquipmentRecipeProperties from '@properties/rms/EquipmentRecipeProperties';
import EquipmentProperties from '@properties/rms/EquipmentProperties';
import MaterialLotQcProperties from '@pages/Properties/mms/MaterialLotQcProperties';
import MaterialLotIQcManagerProperties from '@pages/Properties/mms/MaterialLotIQcManagerProperties';
import MaterialLotOQcManagerProperties from '@pages/Properties/mms/MaterialLotOQcManagerProperties';
import MobileHome from '@pages/Mobile/MobileHome';
import ReceiveMLotByOrderProperties from '@pages/Properties/mms/mobile/ReceiveMLotByOrderProperties';
import SplitMaterialLotProperties from '@pages/Properties/mms/mobile/SplitMaterialLotProperties';
//vc
import VcDeliveryOrderProperties from '@properties/vc/VcDeliveryOrderProperties';
import VcApproveDocumentProperties from '@pages/Properties/vc/VcApproveDocumentProperties';
import VcFinishGoodProperties from '@properties/vc/VcFinishGoodProperties'



/**
 * 构建url ?表示可选参数
 * @param {*} url 
 */
const buildPath = (url) => {
  return url + "/:tableRrn/:parentRrn/:parameter1?/:parameter2?/:parameter3?/:parameter4?/:parameter5?"
}

const routerConfig = [
  {
    path: '/',
    layout: BlankLayout,
    component: Login,
  },
  
  {
    path: 'Home',
    layout: HeaderAsideFooterResponsiveLayout,
    component: Home,
  },
  {
    path: buildPath('System/OnlineTableManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('System/OnlineTabManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('System/OnlineFieldManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('System/OnlineRefTableManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('System/SysRefNameManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('System/OrgRefNameManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('System/MessageManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MessageProperties,
  },
  {
    path: buildPath('System/ParameterManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: ParameterProperties,
  },

  {
    path: buildPath('Security/UserManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: UserProperties,
  },
  {
    path: buildPath('Security/RoleManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: RoleProperties,
  },
  //KMS
  {
    path: buildPath('KMS/QuestionManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: QuestionProperties,
  }, 
  {
    path: buildPath('KMS/QuestionHisManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  }, 
  //LMS
  {
    path: buildPath('LMS/IDGeneratorRuleManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: GeneratorRuleProperties,
  },
  //MMS
  {
    path: buildPath('MMS/StatusModelManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialStatusModelProperties,
  },
  {
    path: buildPath('MMS/StatusCategoryManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('MMS/StatusManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('MMS/EventManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('MMS/RawMaterialManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialProperties,
  },
  {
    path: buildPath('MMS/MaterialLotManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialLotProperties,
  },
  {
    path: buildPath('MMS/MaterialLotHistoryManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityHistoryProperties,
  },
  {
    path: buildPath('MMS/MLotMergeRuleManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('MMS/IncomingMaterialImport'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: IncomingMaterialImportProperties,
  },
  {
    path: buildPath('MMS/IncomingMaterialDelete'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: IncomingMaterialDeleteProperties,
  },
  {
    path: buildPath('MMS/IncomingMaterialReceive'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: IncomingMaterialReceiveProperties,
  },
  {
    path: buildPath('MMS/IssueLotOrder'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: IssueLotOrderProperties,
  },
  {
    path: buildPath('MMS/IncomingMLotImport'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: IncomingMLotImportProperties,
  },
  // 质量相关
  {
    path: buildPath('MQC/IqcManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('MQC/MLotQC'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialLotIQcManagerProperties,
  },
  {
    path: buildPath('MQC/OqcManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('MQC/MLotOQC'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialLotOQcManagerProperties,
  },
  //MES成品接收
  {
    path: buildPath('MMS/MESFinishGoodManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MesFinishGoodProperties,
  },
  //Doc
  {
    path: buildPath('Doc/DeliveryOrderManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: GcOrderProperties,
  },
  {
    path: buildPath('Doc/ReTestOrderManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: GcReTestOrderProperties,
  },
  //WMS
  {
    path: buildPath('WMS/WarehouseManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('WMS/MLotInventoryManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialLotInventoryProperties,
  },
  {
    path: buildPath('WMS/StorageManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('WMS/MaterialLotStockIn'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: MaterialLotStockInProperties,
  },
  {
    path: buildPath('WMS/GCMaterialLotStockIn'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: GcMaterialLotStockInProperties,
  },
  {
    path: buildPath('WMS/CheckManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: GcCheckProperties,
  },
  //PackManager
  {
    path: buildPath('Pack/PackRuleManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('Pack/PackMaterialLot'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: PackageMaterialLotProperties,
  },
  {
    path: buildPath('Pack/AddPackMaterialLot'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: AddPackagaMaterialLotProperties,
  },
  {
    path: buildPath('Pack/UnPackMaterialLot'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: UnPackagaMaterialLotProperties,
  },
  {
    path: buildPath('Pack/PackCaseCheck'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: PackCaseCheckProperties,
  },
  {
    path: buildPath('Pack/StockOutCheck'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: OQCCheckProperties,
  },
  {
    path: buildPath('Pack/PrintCaseLabel'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: GcPrintCaseLabelProperties,
  },
  //RMS
  {
    path: buildPath('Rms/EquipmentManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EquipmentProperties,
  },
  {
    path: buildPath('Rms/RecipeManager'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },
  {
    path: buildPath('Rms/EquipmentRecipe'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EquipmentRecipeProperties,
  },
  //vc
  {
    path: buildPath('VC/VCMLotDocRule'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: EntityProperties,
  },

  //MobileMenu of WMS
  {
    path: 'MobileHome',
    layout: BlankLayout,
    component: MobileHome,
  },
  {
    path: buildPath('MMS/Mobile/ReceiveMLot'),
    layout: BlankLayout,
    component: ReceiveMLotByOrderProperties,
  },
  
  {
    path: buildPath('MMS/Mobile/SplitMLot'),
    layout: BlankLayout,
    component: SplitMaterialLotProperties,
  },

  {
    path: buildPath('MMS/Mobile/PrintMLot'),
    layout: BlankLayout,
    component: ReceiveMLotByOrderProperties,
  },
 {
    path: buildPath('MMS/IssueMaterialOrder'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: IssueMaterialOrderProperties,
  },
  {
    path: buildPath('MMS/ReturnMLotOrder'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: ReturnMLotOrderProperties,
  },
  {
    path: buildPath('MMS/MaterialLotSplit'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: SplitMaterialLotProperties,
  },
  {
    path: buildPath('VC/VcDeliveryOrderPrint'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: VcDeliveryOrderProperties,
  },
  {
    path: buildPath('VC/ApproveDocument'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: VcApproveDocumentProperties,
  },
  {
    path: buildPath('VC/VcFinishGoodReceive'),
    layout: HeaderAsideFooterResponsiveLayout,
    component: VcFinishGoodProperties,
  },
  {
    path: '*',
    layout: HeaderAsideFooterResponsiveLayout,
    component: NotFound,
  },

  
];

export default routerConfig;
