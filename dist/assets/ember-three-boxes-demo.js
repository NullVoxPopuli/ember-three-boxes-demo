'use strict';



;define("ember-three-boxes-demo/app", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-three-boxes-demo/resolver", "ember-load-initializers", "ember-three-boxes-demo/config/environment"], function (_exports, _defineProperty2, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "modulePrefix", _environment.default.modulePrefix);
      (0, _defineProperty2.default)(this, "podModulePrefix", _environment.default.podModulePrefix);
      (0, _defineProperty2.default)(this, "Resolver", _resolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-three-boxes-demo/component-managers/control-flow", ["exports", "ember-components-extra/-private/control-flow-manager"], function (_exports, _controlFlowManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _controlFlowManager.default;
    }
  });
});
;define("ember-three-boxes-demo/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("ember-three-boxes-demo/component-managers/renderless", ["exports", "ember-components-extra/-private/renderless-manager"], function (_exports, _renderlessManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _renderlessManager.default;
    }
  });
});
;define("ember-three-boxes-demo/components/e-threejs-demo/demos/controls/cube", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class='controls'>
    <label>
      Amount
      {{#let (array 100 250 500 1000 2000 10000) as |counts|}}
        <select {{on 'change' this.updateCount}}>
          {{#each counts as |count|}}
            <option
              selected={{eq this.appState.count count}}
              value={{count}}
            >
              {{count}}
            </option>
          {{/each}}
        </select>
      {{/let}}
    </label>
  </div>
  
  */
  {
    id: "zyniGAiM",
    block: "{\"symbols\":[\"counts\",\"count\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"controls\"],[8],[0,\"\\n  \"],[7,\"label\",true],[8],[0,\"\\n    Amount\\n\"],[4,\"let\",[[28,\"array\",[100,250,500,1000,2000,10000],null]],null,{\"statements\":[[0,\"      \"],[7,\"select\",false],[3,\"on\",[\"change\",[23,0,[\"updateCount\"]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"          \"],[7,\"option\",true],[11,\"selected\",[28,\"eq\",[[23,0,[\"appState\",\"count\"]],[23,2,[]]],null]],[11,\"value\",[23,2,[]]],[8],[0,\"\\n            \"],[1,[23,2,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-boxes-demo/components/e-threejs-demo/demos/controls/cube.hbs"
    }
  });

  let Controls = (_class = (_temp = class Controls extends _component.default {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "appState", _descriptor, this);
    }

    updateCount(changeEvent) {
      let value = changeEvent.target.value;
      let newCount = parseInt(value);
      this.appState.updateCount(newCount);

      if (this.args.onUpdate) {
        this.args.onUpdate(newCount);
      }
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "appState", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "updateCount", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "updateCount"), _class.prototype)), _class);
  _exports.default = Controls;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Controls);
});
;define("ember-three-boxes-demo/components/e-threejs-demo/demos/controls/demo-switcher", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component", "ember-three-boxes-demo/components/e-threejs-demo/index"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class='demo-selector-controls'>
    <label>
      Demo selector
        <select {{on 'change' @onSelectDemo}}>
          {{#each this.demoList as |demoListItem|}}
            <option
              selected={{eq this.selectedDemoListItem demoListItem}}
              value={{demoListItem}}
            >
              {{demoListItem}}
            </option>
          {{/each}}
        </select>
    </label>
  </div>
  
  */
  {
    id: "RfTPiqrh",
    block: "{\"symbols\":[\"demoListItem\",\"@onSelectDemo\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"demo-selector-controls\"],[8],[0,\"\\n  \"],[7,\"label\",true],[8],[0,\"\\n    Demo selector\\n      \"],[7,\"select\",false],[3,\"on\",[\"change\",[23,2,[]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"demoList\"]]],null,{\"statements\":[[0,\"          \"],[7,\"option\",true],[11,\"selected\",[28,\"eq\",[[23,0,[\"selectedDemoListItem\"]],[23,1,[]]],null]],[11,\"value\",[23,1,[]]],[8],[0,\"\\n            \"],[1,[23,1,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-boxes-demo/components/e-threejs-demo/demos/controls/demo-switcher.hbs"
    }
  });

  let Controls = (_class = (_temp = class Controls extends _component.default {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "demoList", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "selectedDemoListItem", _descriptor2, this);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "demoList", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ['cubes', 'lines'];
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "selectedDemoListItem", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _index.DEFAULT_DEMO;
    }
  })), _class);
  _exports.default = Controls;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Controls);
});
;define("ember-three-boxes-demo/components/e-threejs-demo/demos/cubes", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component", "stats.js"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <EThreejsDemo::Demos::Controls::Cube @onUpdate={{this.onCountUpdate}} />
  
  <main {{will-destroy this.destroyElement}}>
    <EThreejs @id={{this.sceneId}} as |s|>
      <EThreejs::Lights::DirectionalLight
        @parent={{s.scene}}
        @position={{this.lightPosition}}
      />
      <EThreejs::Cameras::PerspectiveCamera
        @position={{this.cameraPosition}}
        @aspectRatio={{this.aspectRatio}}
      />
      <EThreejs::Core::Object3d
        @parent={{s.scene}}
        @rotation={{this.containerRotation}}
        as |meshContainer|
      >
        {{#each this.appState.objectProperties as |properties|}}
          <EThreejs::Objects::Mesh
            @rotation={{properties.r}}
            @position={{properties.p}}
            @scale={{properties.s}}
            @parent={{meshContainer}}
            @material={{this.material}}
            @geometry={{this.geometry}}
          />
        {{/each}}
      </EThreejs::Core::Object3d>
    </EThreejs>
  </main>
  
  */
  {
    id: "gVCkArZw",
    block: "{\"symbols\":[\"s\",\"meshContainer\",\"properties\"],\"statements\":[[5,\"e-threejs-demo/demos/controls/cube\",[],[[\"@onUpdate\"],[[23,0,[\"onCountUpdate\"]]]]],[0,\"\\n\\n\"],[7,\"main\",false],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[0,\"\\n  \"],[5,\"e-threejs\",[],[[\"@id\"],[[23,0,[\"sceneId\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"e-threejs/lights/directional-light\",[],[[\"@parent\",\"@position\"],[[23,1,[\"scene\"]],[23,0,[\"lightPosition\"]]]]],[0,\"\\n    \"],[5,\"e-threejs/cameras/perspective-camera\",[],[[\"@position\",\"@aspectRatio\"],[[23,0,[\"cameraPosition\"]],[23,0,[\"aspectRatio\"]]]]],[0,\"\\n    \"],[5,\"e-threejs/core/object3d\",[],[[\"@parent\",\"@rotation\"],[[23,1,[\"scene\"]],[23,0,[\"containerRotation\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"appState\",\"objectProperties\"]]],null,{\"statements\":[[0,\"        \"],[5,\"e-threejs/objects/mesh\",[],[[\"@rotation\",\"@position\",\"@scale\",\"@parent\",\"@material\",\"@geometry\"],[[23,3,[\"r\"]],[23,3,[\"p\"]],[23,3,[\"s\"]],[23,2,[]],[23,0,[\"material\"]],[23,0,[\"geometry\"]]]]],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"]],\"parameters\":[2]}],[0,\"\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-boxes-demo/components/e-threejs-demo/demos/cubes.hbs"
    }
  });

  let DemoComponent = (_dec = Ember.inject.service('e-threejs/scene'), (_class = (_temp = class DemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "appState", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "sceneService", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "containerRotation", _descriptor3, this);
      (0, _defineProperty2.default)(this, "counter", 0);
      (0, _defineProperty2.default)(this, "cameraPosition", new _three.default.Vector3(0, 0, 6.2));
      (0, _defineProperty2.default)(this, "lightPosition", new _three.default.Vector3(-5, 0, 10));
      (0, _defineProperty2.default)(this, "geometry", new _three.default.BoxGeometry(2, 2, 2));
      (0, _defineProperty2.default)(this, "material", new _three.default.MeshNormalMaterial());
      (0, _defineProperty2.default)(this, "sceneId", "ember-threejs-demo");
      (0, _defineProperty2.default)(this, "state", undefined);
      this.stats = new _stats.default();
      document.body.appendChild(this.stats.dom); // TODO: fix this is not ideal, but for now it gets us a single RAF loop

      let scene = this.sceneService.get(this.sceneId);
      scene.addPreRenderCallback(this.render, this);
      scene.setStats(this.stats);
    }

    get aspectRatio() {
      return window.innerWidth / window.innerHeight;
    }

    render() {
      let {
        objectProperties
      } = this.appState;
      this.containerRotation.y += 0.045;
      this.containerRotation = this.containerRotation;
      let radius = 0.085;

      for (let i = 0; i < objectProperties.length; i++) {
        let property = objectProperties[i];
        property.r.x = property.r.x + 0.01;
        property.r.y = property.r.y + 0.01;
        property.r.z = property.r.z + 0.01;
        property.p.x = property.p.x + Math.sin(this.counter + property.r.x) * radius;
        property.p.y = property.p.y + Math.cos(this.counter + property.r.y) * radius;
        property.p.z = property.p.z + Math.sin(this.counter + property.r.z) * radius;
        let scalar = Math.cos(this.counter * 2);
        property.s.x = property.s.y = property.s.z = scalar; // let glimmer know a tracked object has changed (to avoid creating new objects):

        property.s = property.s;
        property.p = property.p;
        property.r = property.r;
      }

      this.counter += 0.05;
    }

    destroyElement() {
      document.body.removeChild(this.stats.dom);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "appState", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "containerRotation", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Euler();
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype)), _class));
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-boxes-demo/components/e-threejs-demo/demos/lines", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component", "stats.js"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main {{will-destroy this.destroyElement}}>
    <EThreejs @id={{this.sceneId}} as |s|>
      <EThreejs::Lights::DirectionalLight
        @parent={{s.scene}}
        @position={{this.lightPosition}}
      />
      <EThreejs::Cameras::PerspectiveCamera
        @position={{this.cameraPosition}}
        @aspectRatio={{this.aspectRatio}}
      />
      <EThreejs::Core::Object3d
        @parent={{s.scene}}
        @rotation={{this.containerRotation}}
        as |lineContainer|
      >
        {{#each this.lineSegmentsData as |segmentData|}}
          <EThreejs::Objects::LineSegments
            @parent={{lineContainer}}
            @geometry={{segmentData.geometry}}
            @scale={{segmentData.scale}}
            @material={{this.lineMaterial}}
          />
          {{log geometry}}
        {{/each}}
      </EThreejs::Core::Object3d>
    </EThreejs>
  </main>
  
  */
  {
    id: "QpT83zex",
    block: "{\"symbols\":[\"s\",\"lineContainer\",\"segmentData\"],\"statements\":[[7,\"main\",false],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[0,\"\\n  \"],[5,\"e-threejs\",[],[[\"@id\"],[[23,0,[\"sceneId\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"e-threejs/lights/directional-light\",[],[[\"@parent\",\"@position\"],[[23,1,[\"scene\"]],[23,0,[\"lightPosition\"]]]]],[0,\"\\n    \"],[5,\"e-threejs/cameras/perspective-camera\",[],[[\"@position\",\"@aspectRatio\"],[[23,0,[\"cameraPosition\"]],[23,0,[\"aspectRatio\"]]]]],[0,\"\\n    \"],[5,\"e-threejs/core/object3d\",[],[[\"@parent\",\"@rotation\"],[[23,1,[\"scene\"]],[23,0,[\"containerRotation\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"lineSegmentsData\"]]],null,{\"statements\":[[0,\"        \"],[5,\"e-threejs/objects/line-segments\",[],[[\"@parent\",\"@geometry\",\"@scale\",\"@material\"],[[23,2,[]],[23,3,[\"geometry\"]],[23,3,[\"scale\"]],[23,0,[\"lineMaterial\"]]]]],[0,\"\\n        \"],[1,[28,\"log\",[[24,[\"geometry\"]]],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"]],\"parameters\":[2]}],[0,\"\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-boxes-demo/components/e-threejs-demo/demos/lines.hbs"
    }
  });

  let DemoComponent = (_dec = Ember.inject.service('e-threejs/scene'), (_class = (_temp = class DemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "sceneService", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "containerRotation", _descriptor2, this);
      (0, _defineProperty2.default)(this, "counter", 0);
      (0, _defineProperty2.default)(this, "cameraPosition", new _three.default.Vector3(0, 0, 14.2));
      (0, _defineProperty2.default)(this, "lightPosition", new _three.default.Vector3(-5, 0, 10));
      (0, _defineProperty2.default)(this, "lineMaterial", new _three.default.LineBasicMaterial({
        color: 0x000000
      }));
      (0, _defineProperty2.default)(this, "sceneId", "ember-threejs-demo");
      (0, _defineProperty2.default)(this, "state", undefined);
      (0, _initializerDefineProperty2.default)(this, "_lineGeometries", _descriptor3, this);
      this.stats = new _stats.default();
      document.body.appendChild(this.stats.dom);
      let scene = this.sceneService.get(this.sceneId);
      scene.addPreRenderCallback(this.render, this);
      scene.setStats(this.stats);
      this._lineGeometries = [this.createGeometry(), this.createGeometry(), this.createGeometry(), this.createGeometry(), this.createGeometry(), this.createGeometry()];
    }

    createGeometry() {
      let geometry = new _three.default.BufferGeometry();
      let vertices = [];
      let vertex = new _three.default.Vector3();

      for (let i = 0; i < 1500; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.normalize();
        vertex.multiplyScalar(10);
        vertices.push(vertex.x, vertex.y, vertex.z);
        vertex.multiplyScalar(Math.random() * 0.09 + 1);
        vertices.push(vertex.x, vertex.y, vertex.z);
      }

      geometry.setAttribute('position', new _three.default.Float32BufferAttribute(vertices, 3));
      return geometry;
    }

    render() {
      this.containerRotation.y += 0.02;
      this.containerRotation = this.containerRotation;
      this.counter += 0.05;
    }

    get lineSegmentsData() {
      let scale = 0;
      return this._lineGeometries.map(geometry => {
        scale += 0.2;
        return {
          geometry,
          scale: new _three.default.Vector3(scale, scale, scale)
        };
      });
    }

    destroyElement() {
      document.body.removeChild(this.stats.dom);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "containerRotation", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Euler();
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "_lineGeometries", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class));
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-boxes-demo/components/e-threejs-demo/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.DEFAULT_DEMO = void 0;

  var _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <EThreejsDemo::Demos::Controls::DemoSwitcher @onSelectDemo={{this.onSelectDemo}} />
  
  <main>
    {{component (concat 'e-threejs-demo/demos/' this.selectedDemo)}}
  </main>
  
  */
  {
    id: "1ns9HcBZ",
    block: "{\"symbols\":[],\"statements\":[[5,\"e-threejs-demo/demos/controls/demo-switcher\",[],[[\"@onSelectDemo\"],[[23,0,[\"onSelectDemo\"]]]]],[0,\"\\n\\n\"],[7,\"main\",true],[8],[0,\"\\n  \"],[1,[28,\"component\",[[28,\"concat\",[\"e-threejs-demo/demos/\",[23,0,[\"selectedDemo\"]]],null]],null],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-boxes-demo/components/e-threejs-demo/index.hbs"
    }
  });

  const DEFAULT_DEMO = 'lines';
  _exports.DEFAULT_DEMO = DEFAULT_DEMO;
  let DemoComponent = (_class = (_temp = class DemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "selectedDemo", _descriptor, this);
    }

    onSelectDemo(event) {
      let {
        value
      } = event.target;
      this.selectedDemo = value;
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "selectedDemo", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return DEFAULT_DEMO;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "onSelectDemo", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onSelectDemo"), _class.prototype)), _class);
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-boxes-demo/components/e-threejs/cameras/perspective-camera", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "ember-three-boxes-demo/components/e-threejs/utils/object-proxy"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  const defaults = {
    fov: 75,
    near: 0.1,
    far: 1000
  };
  let ScenePerspectiveCameraComponent = (_dec = Ember.inject.service('e-threejs/scene'), (_class = (_temp = class ScenePerspectiveCameraComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      (0, _initializerDefineProperty2.default)(this, "sceneService", _descriptor, this);
      let options = { ...defaults,
        ...args
      };
      let {
        fov,
        aspectRatio,
        near,
        far
      } = options;
      let scene = this.sceneService.getDefaultScene();
      this.object3D = new _three.default.PerspectiveCamera(fov, aspectRatio, near, far);
      scene.setCamera(this.object3D);
      this.init();
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ScenePerspectiveCameraComponent;
});
;define("ember-three-boxes-demo/components/e-threejs/core/object3d", ["exports", "three", "ember-three-boxes-demo/components/e-threejs/utils/object-proxy"], function (_exports, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield this.object3D}}
  
  */
  {
    id: "ihtIBRi+",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[23,0,[\"object3D\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-boxes-demo/components/e-threejs/core/object3d.hbs"
    }
  });

  class SceneMeshComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      this.object3D = new _three.default.Object3D();
      this.init();
    }

  }

  _exports.default = SceneMeshComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneMeshComponent);
});
;define("ember-three-boxes-demo/components/e-threejs/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-lifecycle-component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _emberLifecycleComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div
    {{did-insert this.insertElement}}
    {{will-destroy this.destroyElement}}
  ></div>
  
  {{yield this.eThreeJsScene}}
  
  */
  {
    id: "tK6cwBRN",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\",false],[3,\"did-insert\",[[23,0,[\"insertElement\"]]]],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[9],[0,\"\\n\\n\"],[14,1,[[23,0,[\"eThreeJsScene\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-boxes-demo/components/e-threejs/index.hbs"
    }
  });

  let SceneComponent = (_dec = Ember.inject.service('e-threejs/scene'), (_class = (_temp = class SceneComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor(owner, args) {
      super(owner, args);
      (0, _defineProperty2.default)(this, "element", undefined);
      (0, _defineProperty2.default)(this, "eThreeJsScene", undefined);
      (0, _initializerDefineProperty2.default)(this, "sceneService", _descriptor, this);
      this.eThreeJsScene = this.sceneService.get(this.args.id);
    }

    insertElement(element) {
      this.element = element;
      this.element.appendChild(this.eThreeJsScene.domElement);
      this.eThreeJsScene.start();
    }

    destroyElement() {
      this.element.removeChild(this.eThreeJsScene.domElement);
      this.sceneService.dispose(this.args.id);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "insertElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "insertElement"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype)), _class));
  _exports.default = SceneComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneComponent);
});
;define("ember-three-boxes-demo/components/e-threejs/lights/directional-light", ["exports", "ember-three-boxes-demo/components/e-threejs/utils/object-proxy", "three"], function (_exports, _objectProxy, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneDirectionalLightComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        x,
        y,
        z
      } = args;
      this.object3D = new _three.default.DirectionalLight(0xffffff, 1);
      this.object3D.position.set(x, y, z).normalize();
      this.init();
    }

    didReceiveArgs() {
      let {
        position,
        parent
      } = this.args;

      if (this._object3D && position) {
        this._object3D.position.set(position.x, position.y, position.z).normalize();
      }

      if (parent !== this._parent) {
        this.remove(this._parent, this._object3D);
        this.add(parent, this._object3D);
        this._parent = parent;
      }
    }

  }

  _exports.default = SceneDirectionalLightComponent;
});
;define("ember-three-boxes-demo/components/e-threejs/objects/line-segments", ["exports", "three", "ember-three-boxes-demo/components/e-threejs/utils/object-proxy"], function (_exports, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneMeshComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        geometry,
        material
      } = this.args;
      this.object3D = new _three.default.LineSegments(geometry, material);
      this.init();
    }

  }

  _exports.default = SceneMeshComponent;
});
;define("ember-three-boxes-demo/components/e-threejs/objects/mesh", ["exports", "three", "ember-three-boxes-demo/components/e-threejs/utils/object-proxy"], function (_exports, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneMeshComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        geometry,
        material
      } = this.args;
      this.object3D = new _three.default.Mesh(geometry, material);
      this.init();
    }

  }

  _exports.default = SceneMeshComponent;
});
;define("ember-three-boxes-demo/components/e-threejs/utils/object-proxy", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-lifecycle-component"], function (_exports, _defineProperty2, _emberLifecycleComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class EmberObject3DComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor(owner, args) {
      super(owner, args);
      (0, _defineProperty2.default)(this, "_parent", undefined);
      (0, _defineProperty2.default)(this, "_object3D", undefined);
    }

    init() {
      this.didReceiveArgs();
    }

    didReceiveArgs() {
      let {
        rotation,
        position,
        parent,
        scale
      } = this.args;

      if (this._object3D && rotation) {
        this._object3D.rotation.set(rotation.x, rotation.y, rotation.z);
      }

      if (this._object3D && position) {
        this._object3D.position.set(position.x, position.y, position.z);
      }

      if (this._object3D && scale) {
        this._object3D.scale.set(scale.x, scale.y, scale.z);
      }

      if (parent !== this._parent) {
        this.remove(this._parent, this._object3D);
        this.add(parent, this._object3D);
        this._parent = parent;
      }
    }

    add(parent, object3D) {
      if (parent && object3D) {
        parent.add(object3D);
      }
    }

    remove(parent, object3D) {
      if (parent && object3D) {
        parent.remove(object3D);
      }
    }

    get object3D() {
      return this._object3D;
    }

    set object3D(object3D) {
      this._object3D = object3D;
    }

    willDestroy() {
      if (this._parent) {
        this.remove(this._parent, this.object3D);
      }
    }

  }

  _exports.default = EmberObject3DComponent;
});
;define("ember-three-boxes-demo/helpers/app-version", ["exports", "ember-three-boxes-demo/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-three-boxes-demo/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("ember-three-boxes-demo/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("ember-three-boxes-demo/helpers/eq", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function eq([a, b]
  /*, hash*/
  ) {
    return a === b;
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("ember-three-boxes-demo/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-three-boxes-demo/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-three-boxes-demo/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-three-boxes-demo/initializers/export-application-global", ["exports", "ember-three-boxes-demo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-three-boxes-demo/initializers/tracked-built-ins-config", ["exports", "tracked-built-ins", "ember-three-boxes-demo/config/environment"], function (_exports, _trackedBuiltIns, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  (0, _trackedBuiltIns.setTrackedBuiltInsConfig)(_environment.default.trackedBuiltIns);
  var _default = {
    // Do nothing
    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-three-boxes-demo/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("ember-three-boxes-demo/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("ember-three-boxes-demo/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("ember-three-boxes-demo/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ember-three-boxes-demo/router", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-three-boxes-demo/config/environment"], function (_exports, _defineProperty2, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "location", _environment.default.locationType);
      (0, _defineProperty2.default)(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('without-templates');
  });
});
;define("ember-three-boxes-demo/services/app-state", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "qs", "ember-three-boxes-demo/utils/utils"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _qs, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  let AppStateService = (_class = (_temp = class AppStateService extends Ember.Service {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "count", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "objectProperties", _descriptor2, this);
      let query = window.location.href.split('?')[1];

      let parsed = _qs.default.parse(query);

      if (parsed.amount) {
        let parsedInt = parseInt(parsed.amount, 10);

        if (parsedInt) {
          this.count = parsedInt;
        }
      }

      this.updateProperties();
    }

    updateCount(newCount) {
      this.count = newCount;
      this.updateProperties();
    }

    updateProperties() {
      this.objectProperties = (0, _utils.newProperties)(this.count);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "count", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 100;
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "objectProperties", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class);
  _exports.default = AppStateService;
});
;define("ember-three-boxes-demo/services/e-threejs/-lib/EThreejsScene", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-three-boxes-demo/services/e-threejs/-lib/RequestAnimationFrame", "three"], function (_exports, _defineProperty2, _RequestAnimationFrame, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class EThreeJSScene {
    constructor() {
      (0, _defineProperty2.default)(this, "scene", undefined);
      (0, _defineProperty2.default)(this, "renderer", undefined);
      (0, _defineProperty2.default)(this, "raf", undefined);
      (0, _defineProperty2.default)(this, "frameTime", 16);
      (0, _defineProperty2.default)(this, "frameAcc", 0);
      (0, _defineProperty2.default)(this, "stats", undefined);
      (0, _defineProperty2.default)(this, "preRenderCallback", {
        fnc: undefined,
        scope: undefined
      });
      this.scene = new _three.default.Scene();
      this.renderer = new _three.default.WebGLRenderer({
        alpha: true,
        antialias: false
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.raf = new _RequestAnimationFrame.RequestAnimationFrame(this.render, this);
    }

    start() {
      this.raf.start();
    }

    stop() {
      this.raf.stop();
    }

    addPreRenderCallback(fnc, scope) {
      this.preRenderCallback = {
        fnc,
        scope
      };
    }

    setCamera(camera) {
      this.camera = camera;
    }

    setStats(stats) {
      this.stats = stats;
    }

    render(dt) {
      if (this.stats) {
        this.stats.begin();
      }

      this.frameAcc += dt;

      if (this.frameAcc > this.frameTime) {
        if (this.preRenderCallback.fnc) {
          this.preRenderCallback.fnc.apply(this.preRenderCallback.scope);
        }

        this.frameAcc = 0;
        this.renderer.render(this.scene, this.camera);
      }

      if (this.stats) {
        this.stats.end();
      }
    }

    dispose() {
      this.stop();
      this.scene.dispose();
      this.renderer.dispose();
      this.preRenderCallback = undefined;
    }

    get domElement() {
      return this.renderer.domElement;
    }

  }

  _exports.default = EThreeJSScene;
});
;define("ember-three-boxes-demo/services/e-threejs/-lib/RequestAnimationFrame", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.RequestAnimationFrame = void 0;

  class RequestAnimationFrame {
    constructor(callback, callbackContext) {
      this._active = false;
      this._argsArray = [];
      this.setCallback(callback, callbackContext);

      this._rafUpdateFunction = () => {
        if (this._active) {
          this._tick();
        }
      };

      this._argsArray.push(this._dt);
    }

    setCallback(callback, callbackContext) {
      this._callback = callback;
      this._callbackContext = callbackContext;
    }

    start() {
      if (this._active) {
        return;
      }

      this._prevTime = Date.now();
      this._active = true;
      requestAnimationFrame(this._rafUpdateFunction);
    }

    dispose() {
      this.stop();
      this._active = null;
      this._argsArray = null;
      this._callback = null;
      this._callbackContext = null;
    }

    stop() {
      this._active = false;
    }

    get active() {
      return this._active;
    }

    _tick() {
      this._currentTime = Date.now();
      this._dt = this._currentTime - this._prevTime;
      this._argsArray[0] = this._dt; // spread operator shims are slower than apply.

      this._callback.apply(this._callbackContext, this._argsArray);

      requestAnimationFrame(this._rafUpdateFunction);
      this._prevTime = this._currentTime;
    }

  }

  _exports.RequestAnimationFrame = RequestAnimationFrame;
});
;define("ember-three-boxes-demo/services/e-threejs/scene", ["exports", "ember-three-boxes-demo/services/e-threejs/-lib/EThreejsScene"], function (_exports, _EThreejsScene) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class EThreeJSSceneService extends Ember.Service {
    constructor() {
      super(...arguments);
    }

    getDefaultScene(id = undefined) {
      if (id === undefined) {
        let keys = Object.keys(EThreeJSSceneService._scenes);

        if (keys.length > 0) {
          console.warn('At the moment we only support a single three js scene');
        }

        return EThreeJSSceneService._scenes[keys[0]];
      }

      return EThreeJSSceneService._scenes[id];
    }

    get(id) {
      let scene = EThreeJSSceneService._scenes[id];

      if (!scene) {
        EThreeJSSceneService._scenes[id] = new _EThreejsScene.default();
      }

      return EThreeJSSceneService._scenes[id];
    }

    dispose(id) {
      let scene = EThreeJSSceneService._scenes[id];

      if (scene) {
        scene.dispose();
        delete EThreeJSSceneService._scenes[id];
      }
    }

  }

  _exports.default = EThreeJSSceneService;
  EThreeJSSceneService._scenes = {};
});
;define("ember-three-boxes-demo/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mYDqFZwS",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-three-boxes-demo/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hSM+6T3w",
    "block": "{\"symbols\":[],\"statements\":[[5,\"e-threejs-demo\",[],[[],[]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-three-boxes-demo/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/utils/utils", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.avg = avg;
  _exports.random = random;
  _exports.newProperties = newProperties;

  var _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function avg(arr) {
    return arr.reduce((total, num) => total + num, 0) / arr.length;
  }

  function random() {
    return Math.random() * 360;
  }

  let ObjectProperties = (_class = (_temp = class ObjectProperties {
    constructor() {
      (0, _initializerDefineProperty2.default)(this, "r", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "p", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "s", _descriptor3, this);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "r", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Euler();
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "p", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3();
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "s", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3();
    }
  })), _class);

  function newProperties(num = 20) {
    return Array(num).fill().map(() => {
      let properties = new ObjectProperties();
      properties.r.x = random();
      properties.r.y = random();
      properties.r.z = random();
      let scalar = Math.random();
      properties.s.x = scalar;
      properties.s.y = scalar;
      properties.s.z = scalar;
      return properties;
    });
  }
});
;

;define('ember-three-boxes-demo/config/environment', [], function() {
  var prefix = 'ember-three-boxes-demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-three-boxes-demo/app")["default"].create({"name":"ember-three-boxes-demo","version":"0.0.0+47b959dd"});
          }
        
//# sourceMappingURL=ember-three-boxes-demo.map
