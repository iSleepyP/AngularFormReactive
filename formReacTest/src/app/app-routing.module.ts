import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SolutionComponent } from "./solution/solution.component";

const appRoutes:Routes = [
    
    {path : 'solution',component:SolutionComponent},
]

@NgModule({
    imports: [
        
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRouteModule{

}