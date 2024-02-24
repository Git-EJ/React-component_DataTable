declare module 'oc_react_datatable' {
  export interface DataTableProps {
    stylePrefix: string;
    headers: string[];
    data: any[];
    onEditRequest: any;
    onChange: any;
    onPageChanged: any;
    onResetData: any
    enableResetSettings: boolean;
    resetAfterSearch: boolean;
    itemsPerPage: number;
    arrayOfItemsPerPage: number[];
    itemsSearchSelectValue: string;
    IconLeft: any;
    IconRight: any;
    IconAsc: any;
    IconDesc: any;
    unformatedData: boolean;
  }

  const DataTable: React.ComponentType<DataTableProps>;
  export default DataTable;
}