import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }




export const homeWorkReducer = (state: any, action: any): any => { // need to fix any

    switch (action.type) {

        case 'sort': { // by name

            const comparatorSortUp: any = (a: any, b: any) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();
                if (fa < fb) {
                    return -1;
                } else {
                    return 1;
                }
                //return 0;
            };

            const comparatorSortDown: any = (a: any, b: any) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();
                if (fa > fb) {
                    return -1;
                } else {
                    return 1;
                }
            };

            let stateCopy = state.map((u: any) => ({ ...u }))

            if (action.payload === "up") { return stateCopy.sort(comparatorSortUp) }
            if (action.payload === "down") { return stateCopy.sort(comparatorSortDown) }


            return stateCopy


        }
        case 'check': {

            return state.map((u: any) => ({ ...u })).filter((u: any) => u.age > 18) // need to fix
        }
        default:
            return state
    }
}
