export interface IHierarchizable {
    id: number;

    parent_id: number;

    children: Array<IHierarchizable>;
}