const modulesFiles = import.meta.globEager('./*/*.vue');
console.log('modulesFiles',modulesFiles)
console.log('app',app)

// 注册
export default (app) => {
  for (const path in modulesFiles) {
    const componentName = modulesFiles[path].default.name;
    console.log('componentName',componentName)
    app.component(componentName, modulesFiles[path].default);
  }
};