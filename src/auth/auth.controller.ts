import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";



@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){

    }
    //rutas
    @Post('login')
    login(){
        return 'login'
    }
}
