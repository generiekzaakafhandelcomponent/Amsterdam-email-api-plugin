/*
 * Copyright 2015-2020 Ritense BV, the Netherlands.
 *
 * Licensed under EUPL, Version 1.2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    HttpBackend,
    HttpClient,
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule, TranslationManagementModule} from '@valtimo/layout';
import {TaskModule} from '@valtimo/task';
import {environment} from '../environments/environment';
import {SecurityModule} from '@valtimo/security';
import {
    BpmnJsDiagramModule,
    enableCustomFormioComponents,
    MenuModule,
    registerFormioFileSelectorComponent,
    registerFormioUploadComponent,
    registerFormioValueResolverSelectorComponent,
    WidgetModule,
    ValuePathSelectorComponent

} from '@valtimo/components';
import {
    CaseDetailTabAuditComponent,
    CaseDetailTabDocumentsComponent,
    CaseDetailTabProgressComponent,
    CaseDetailTabSummaryComponent,
    CaseModule,
    DefaultTabs,
} from '@valtimo/case';
import {ProcessModule} from '@valtimo/process';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DocumentModule} from '@valtimo/document';
import {AccountModule} from '@valtimo/account';
import {ChoiceFieldModule} from '@valtimo/choice-field';
import {ResourceModule} from '@valtimo/resource';
import {FormModule} from '@valtimo/form';
import {SwaggerModule} from '@valtimo/swagger';
import {AnalyseModule} from '@valtimo/analyse';
import {ProcessManagementModule} from '@valtimo/process-management';
import {DecisionModule} from '@valtimo/decision';
import {MilestoneModule} from '@valtimo/milestone';
import {LoggerModule} from 'ngx-logger';
import {FormManagementModule} from '@valtimo/form-management';
import {MigrationModule} from '@valtimo/migration';
import {CaseManagementModule} from '@valtimo/case-management';
import {BootstrapModule} from '@valtimo/bootstrap';
import {ConfigModule, ConfigService, CustomMultiTranslateHttpLoaderFactory, LocalizationService} from '@valtimo/shared';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {PluginManagementModule} from '@valtimo/plugin-management';
import {AccessControlManagementModule} from '@valtimo/access-control-management';
import {
    CatalogiApiPluginModule,
    catalogiApiPluginSpecification,
    DocumentenApiPluginModule,
    documentenApiPluginSpecification,
    OpenZaakPluginModule,
    openZaakPluginSpecification,
    ZakenApiPluginModule,
    zakenApiPluginSpecification,
    ObjectenApiPluginModule,
    objectenApiPluginSpecification,
    ObjectTokenAuthenticationPluginModule,
    objectTokenAuthenticationPluginSpecification,
    ObjecttypenApiPluginModule,
    objecttypenApiPluginSpecification,
    PLUGINS_TOKEN
} from '@valtimo/plugin';
import {ZgwModule} from '@valtimo/zgw';
import {ProcessLinkModule} from '@valtimo/process-link';
import {ObjectManagementModule} from '@valtimo/object-management'
import {ObjectModule} from "@valtimo/object";

import {AmsterdamEmailapiPluginModule, amsterdamEmailapiPluginSpecification} from '@valtimo-plugins/amsterdam-emailapi';

import {LoggingModule} from '@valtimo/logging';
import {DashboardModule} from "@valtimo/dashboard";
import {DashboardManagementModule} from "@valtimo/dashboard-management";

export function tabsFactory() {
    return new Map<string, object>([
        [DefaultTabs.summary, CaseDetailTabSummaryComponent],
        [DefaultTabs.progress, CaseDetailTabProgressComponent],
        [DefaultTabs.audit, CaseDetailTabAuditComponent],
        [DefaultTabs.documents, CaseDetailTabDocumentsComponent],
    ]);
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ValuePathSelectorComponent,
        AmsterdamEmailapiPluginModule,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        WidgetModule,
        BootstrapModule,
        ConfigModule.forRoot(environment),
        LoggerModule.forRoot(environment.logger),
        environment.authentication.module,
        SecurityModule,
        MenuModule,
        TaskModule,
        CaseModule.forRoot(tabsFactory),
        ProcessModule,
        BpmnJsDiagramModule,
        FormsModule,
        ReactiveFormsModule,
        DocumentModule,
        AccountModule,
        ChoiceFieldModule,
        ResourceModule,
        FormModule,
        AnalyseModule,
        SwaggerModule,
        ProcessManagementModule,
        DecisionModule,
        MilestoneModule,
        FormManagementModule,
        ProcessLinkModule,
        MigrationModule,
        LoggingModule,
        CaseManagementModule,
        PluginManagementModule,
        AccessControlManagementModule,
        CatalogiApiPluginModule,
        DocumentenApiPluginModule,
        OpenZaakPluginModule,
        ZakenApiPluginModule,
        ObjectenApiPluginModule,
        ObjecttypenApiPluginModule,
        ObjectTokenAuthenticationPluginModule,
        ObjectModule,
        ObjectManagementModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: CustomMultiTranslateHttpLoaderFactory,
                deps: [HttpBackend, HttpClient, ConfigService, LocalizationService],
            },
        }),
        TranslationManagementModule,
        DashboardModule,
        DashboardManagementModule,
        ZgwModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: PLUGINS_TOKEN,
            useValue: [
                amsterdamEmailapiPluginSpecification,
                objectTokenAuthenticationPluginSpecification,
                objectenApiPluginSpecification,
                objecttypenApiPluginSpecification,
                catalogiApiPluginSpecification,
                documentenApiPluginSpecification,
                openZaakPluginSpecification,
                zakenApiPluginSpecification
            ]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(injector: Injector) {
        enableCustomFormioComponents(injector);
        registerFormioUploadComponent(injector);
        registerFormioFileSelectorComponent(injector);
        registerFormioValueResolverSelectorComponent(injector);
    }
}
