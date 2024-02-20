import { createStore } from "redux";
import EmpModel from "../Models/EmpModel";

export class EmpState {
    public allEmployees: EmpModel[] = []
}

export const EmpActionType =  {
    FetchEmployees: "FetchEmployees",
    AddEmployee: "AddEmployee",
    EditEmployee: "UpdateEmployee",
    DeleteEmployee: "DeleteEmployee"
}

export interface EmployeesAction {
    type: string
    payload: any
}

export function EmployeesReducer(currentState: EmpState, action:EmployeesAction): EmpState {

    const newState = {...currentState} 

    switch (action.type) {
        case EmpActionType.FetchEmployees:
            newState.allEmployees = action.payload
            break;
        
        case EmpActionType.AddEmployee: 
            newState.allEmployees.push(action.payload)
            break
    
        case EmpActionType.EditEmployee:
            const indexToUpdate = newState.allEmployees.findIndex(p => p.id === action.payload.id)
            if(indexToUpdate >= 0) {
                newState.allEmployees[indexToUpdate] = action.payload
            }
            break
        
        case EmpActionType.DeleteEmployee: 
            const indexToDelete = newState.allEmployees.findIndex(p => p.id === action.payload)
            if(indexToDelete >= 0) {
                newState.allEmployees.splice(indexToDelete,1)
            }
            break
    }

    return newState
}

export const empStore = createStore(EmployeesReducer)