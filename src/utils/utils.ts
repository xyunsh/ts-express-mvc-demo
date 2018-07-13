import { IHierarchizable } from '@interface/IHierarchizable';
import { find } from 'lodash';

export function hierarchize( items: Array<IHierarchizable>) {

    const top = [];

    items.map(item=>{
        if(!item.parent_id){
            top.push(item);
            return;
        }

        const parent = find(items,{id:item.parent_id});

        if(!parent){
            top.push(item);
            return;
        }

        if(!parent.children){
            parent.children = [];
        }

        parent.children.push(item);
    });

    const setKeys = ( data, parent_key = '' ) => {
        data.forEach((item,index, arr) => {
            item.key = `${parent_key}${index}`;

            if( item.children && item.children.length>0){
                setKeys( item.children, `${index}-`);
            }
        });

        return data;
    }

    return setKeys(top);
}
