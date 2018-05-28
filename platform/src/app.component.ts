import { Compiler, Component, Injector, SkipSelf, ViewChild, ViewContainerRef } from '@angular/core';

declare const SystemJS;

@Component({
    selector: 'myapp',
    templateUrl: './app.component.html'
})
export class CaAppComponent {
    @ViewChild('vc', {read: ViewContainerRef}) vc;

    constructor(private compiler: Compiler, @SkipSelf() private injector: Injector) {
    }

    ngOnInit() {
        SystemJS.import('http://127.0.0.1:8081/dist/a.module.js').then((module) => {
            const moduleFactory = this.compiler.compileModuleSync(module.default);
            const moduleRef = moduleFactory.create(this.injector);
            const widgets = moduleRef.injector.get('widgets');
            const resolver = moduleRef.componentFactoryResolver;
            const componentFactory = resolver.resolveComponentFactory(widgets[0][0].component);
            this.vc.createComponent(componentFactory);
        })
    }
}