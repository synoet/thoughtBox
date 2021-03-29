export interface CRUD {
    list: (limit: number, page: number) => any,
    create: (data: any) => any,
    get: (id: any) => any,
}