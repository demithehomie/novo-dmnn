import { inject } from "@angular/core";


export interface Usuario {
    id: number;
    name: string;
    email: string;
    password: string;   
    phoneNumber: string;
    confirma_senha: string;
}