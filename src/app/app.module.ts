//  Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//  PrimeNG modules
import { ChartModule } from 'primeng/chart';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

// PrimeNG services
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

// components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';


//  custom modules
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';


// Declare the NgModule
@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        DashboardComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AppLayoutModule,
        ChartModule,
        StyleClassModule,
        PanelMenuModule,
        AccordionModule,
        AutoCompleteModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        CheckboxModule,
        ChipsModule,
        ColorPickerModule,
        ConfirmDialogModule,
        DropdownModule,
        EditorModule,
        InputTextModule,
        InputTextareaModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        PaginatorModule,
        PanelModule,
        PasswordModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TieredMenuModule,
        ToastModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        ReactiveFormsModule
    ],
    providers: [
        ConfirmationService,
        MessageService,
        PrimeNGConfig
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
