'use strict';



;define("ember-three-boxes-demo/app", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-resolver", "ember-load-initializers", "ember-three-boxes-demo/config/environment"], function (_exports, _defineProperty2, _emberResolver, _emberLoadInitializers, _environment) {
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
      (0, _defineProperty2.default)(this, "Resolver", _emberResolver.default);
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
;define("ember-three-boxes-demo/components/controls/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class='controls'>
    <label>
      Amount
      {{#let (array 1 20 100 200 500 1000 2000 10000) as |counts|}}
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
    "id": "KYao0bSY",
    "block": "{\"symbols\":[\"counts\",\"count\"],\"statements\":[[10,\"div\"],[14,0,\"controls\"],[12],[2,\"\\n  \"],[10,\"label\"],[12],[2,\"\\n    Amount\\n\"],[6,[37,5],[[30,[36,4],[1,20,100,200,500,1000,2000,10000],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[11,\"select\"],[4,[38,1],[\"change\",[32,0,[\"updateCount\"]]],null],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,1]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"option\"],[15,\"selected\",[30,[36,0],[[32,0,[\"appState\",\"count\"]],[32,2]],null]],[15,2,[32,2]],[12],[2,\"\\n            \"],[1,[32,2]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"      \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"eq\",\"on\",\"-track-array\",\"each\",\"array\",\"let\"]}",
    "moduleName": "ember-three-boxes-demo/components/controls/index.hbs"
  });

  let Controls = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, (_class = (_temp = class Controls extends _component.default {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "router", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "appState", _descriptor2, this);
    }

    updateCount(changeEvent) {
      let value = changeEvent.target.value;
      let newCount = parseInt(value);
      this.router.transitionTo({
        queryParams: {
          n: newCount
        }
      });
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "appState", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "updateCount", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "updateCount"), _class.prototype)), _class));
  _exports.default = Controls;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Controls);
});
;define("ember-three-boxes-demo/components/demo/-base-demo-component", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component", "ember-three-boxes-demo/utils/utils"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const ROTATION_SPEED = 0.01;
  let DemoComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._tracked, _dec4 = Ember._action, (_class = (_temp = class DemoComponent extends _component.default {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "appState", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "stats", _descriptor2, this);
      (0, _defineProperty2.default)(this, "frame", undefined);
      (0, _initializerDefineProperty2.default)(this, "fps", _descriptor3, this);
    }

    get aspectRatio() {
      return window.innerWidth / window.innerHeight;
    }

    animate(updateCanvas) {
      let boundCallback;

      function loop() {
        this.stats.begin();
        let rotations = this.appState.rotations;
        this.frame = requestAnimationFrame(boundCallback);

        for (let i = 0; i < rotations.length; i++) {
          let rotation = rotations[i];

          if (rotation instanceof _utils.Optimized) {
            // Single tracked property
            rotation.r = {
              x: rotation.r.x + ROTATION_SPEED,
              y: rotation.r.y + ROTATION_SPEED,
              z: rotation.r.z + ROTATION_SPEED
            };
          } else {
            // 3 Tracked Properties
            rotation.x += ROTATION_SPEED;
            rotation.y += ROTATION_SPEED;
            rotation.z += ROTATION_SPEED;
          }
        }

        updateCanvas();
        this.stats.end();
      }

      boundCallback = loop.bind(this);
      this.frame = requestAnimationFrame(boundCallback);
    }

    willDestroy() {
      cancelAnimationFrame(this.frame);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "appState", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "stats", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "fps", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "animate", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "animate"), _class.prototype)), _class));
  _exports.default = DemoComponent;
});
;define("ember-three-boxes-demo/components/demo/ember/index", ["exports", "ember-three-boxes-demo/components/demo/-base-demo-component"], function (_exports, _baseDemoComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main>
    <Demo::Ember::Scene @onInit={{this.animate}} as |s|>
      <s.DirectionalLight @x={{-5}} @y={{0}} @z={{-10}} />
      <s.PerspectiveCamera @z={{3.2}} @aspectRatio={{this.aspectRatio}} />
  
      {{#each this.appState.rotations as |rotation|}}
        <s.Box @rotation={{rotation.r}} />
      {{/each}}
  
    </Demo::Ember::Scene>
  </main>
  */
  {
    "id": "oac6uVq0",
    "block": "{\"symbols\":[\"s\",\"rotation\"],\"statements\":[[10,\"main\"],[12],[2,\"\\n  \"],[8,\"demo/ember/scene\",[],[[\"@onInit\"],[[32,0,[\"animate\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"DirectionalLight\"]],[],[[\"@x\",\"@y\",\"@z\"],[-5,0,-10]],null],[2,\"\\n    \"],[8,[32,1,[\"PerspectiveCamera\"]],[],[[\"@z\",\"@aspectRatio\"],[3.2,[32,0,[\"aspectRatio\"]]]],null],[2,\"\\n\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"appState\",\"rotations\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,[32,1,[\"Box\"]],[],[[\"@rotation\"],[[32,2,[\"r\"]]]],null],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/ember/index.hbs"
  });

  class DemoComponent extends _baseDemoComponent.default {}

  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-boxes-demo/components/demo/ember/scene/box", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "three"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _temp;

  let geometry = new _three.default.BoxGeometry(2, 2, 2);
  let material = new _three.default.MeshNormalMaterial();
  let SceneBoxComponent = (_dec = Ember._action, (_class = (_temp = class SceneBoxComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "tagName", "");
    }

    init(...args) {
      super.init(...args);
      this.mesh = new _three.default.Mesh(geometry, material);
      let {
        rotation: r
      } = this;
      this.updateRotation([r.x, r.y, r.z]);
      this.mesh.position.set(0, 0, 0);
      this.scene.add(this.mesh);
    } // eslint-disable-next-line ember/no-component-lifecycle-hooks


    didReceiveAttrs() {
      super.didReceiveAttrs();
      let {
        rotation: r
      } = this;
      this.updateRotation([r.x, r.y, r.z]);
    }

    updateRotation(rotation) {
      this.mesh.rotation.set(...rotation);
    }

    willDestroy() {
      this.scene.remove(this.mesh);
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "updateRotation", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "updateRotation"), _class.prototype)), _class));
  _exports.default = SceneBoxComponent;
});
;define("ember-three-boxes-demo/components/demo/ember/scene/directional-light", ["exports", "@babel/runtime/helpers/esm/defineProperty", "three"], function (_exports, _defineProperty2, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneDirectionalLightComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "tagName", '');
    }

    init(...args) {
      super.init(...args);
      let {
        x,
        y,
        z
      } = this;
      this.light = new _three.default.DirectionalLight(0xffffff, 1);
      this.light.position.set(x, y, z).normalize();
      this.scene.add(this.light);
    }

  }

  _exports.default = SceneDirectionalLightComponent;
});
;define("ember-three-boxes-demo/components/demo/ember/scene/index", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "three"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div {{did-insert this.setElement}}></div>
  
  {{yield
    (hash
      DirectionalLight=(component 'demo/ember/scene/directional-light' scene=this.scene)
      PerspectiveCamera=(component 'demo/ember/scene/perspective-camera'
        scene=this.scene
        setCamera=this.setCamera
      )
      Box=(component 'demo/ember/scene/box' scene=this.scene render=this.render)
    )
  }}
  */
  {
    "id": "hD3a9J+c",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,\"div\"],[4,[38,0],[[32,0,[\"setElement\"]]],null],[12],[13],[2,\"\\n\\n\"],[18,1,[[30,[36,2],null,[[\"DirectionalLight\",\"PerspectiveCamera\",\"Box\"],[[30,[36,1],[\"demo/ember/scene/directional-light\"],[[\"scene\"],[[32,0,[\"scene\"]]]]],[30,[36,1],[\"demo/ember/scene/perspective-camera\"],[[\"scene\",\"setCamera\"],[[32,0,[\"scene\"]],[32,0,[\"setCamera\"]]]]],[30,[36,1],[\"demo/ember/scene/box\"],[[\"scene\",\"render\"],[[32,0,[\"scene\"]],[32,0,[\"render\"]]]]]]]]]]],\"hasEval\":false,\"upvars\":[\"did-insert\",\"component\",\"hash\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/ember/scene/index.hbs"
  }); // eslint-disable-next-line ember/no-classic-components


  let SceneComponent = (
  /**
   * NOTE: the following are built-in APIs and collide with common THREE
   *       property names:
   *       - render
   *       - renderer
   *
   *       This is not an issue for @glimmer/component, only @ember/component
   *
   */
  _dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, (_class = (_temp = class SceneComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "tagName", "");
      (0, _defineProperty2.default)(this, "element", undefined);
    }

    init(owner, args) {
      super.init(owner, args);
      this.scene = new _three.default.Scene();
      this.threeRenderer = new _three.default.WebGLRenderer({
        alpha: true,
        antialias: false
      });
      this.threeRenderer.setSize(window.innerWidth, window.innerHeight);
    }

    setElement(element) {
      this.element = element;
      this.element.appendChild(this.threeRenderer.domElement);

      if (this.camera) {
        this.onInit(this.renderScene);
      }
    }

    setCamera(camera) {
      this.camera = camera;

      if (this.element) {
        this.onInit(this.renderScene);
      }
    }

    renderScene() {
      this.threeRenderer.render(this.scene, this.camera);
    }

    willDestroy() {
      this.threeRenderer.renderLists.dispose();
      this.threeRenderer.dispose(); // this.scene.dispose();
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "setElement", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setElement"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "setCamera", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setCamera"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "renderScene", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "renderScene"), _class.prototype)), _class));
  _exports.default = SceneComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneComponent);
});
;define("ember-three-boxes-demo/components/demo/ember/scene/perspective-camera", ["exports", "@babel/runtime/helpers/esm/defineProperty", "three"], function (_exports, _defineProperty2, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const defaults = {
    fov: 75,
    near: 0.1,
    far: 1000,
    x: 0,
    y: 0,
    z: 0
  };

  class ScenePerspectiveCameraComponent extends Ember.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "tagName", '');
    }

    init(...args) {
      super.init(...args);
      let options = { ...defaults,
        ...this
      };
      let {
        x,
        y,
        z,
        fov,
        aspectRatio,
        near,
        far
      } = options;
      this.camera = new _three.default.PerspectiveCamera(fov, aspectRatio, near, far);
      this.camera.position.set(x, y, z);
      this.setCamera(this.camera);
    }

  }

  _exports.default = ScenePerspectiveCameraComponent;
});
;define("ember-three-boxes-demo/components/demo/glimmer/index", ["exports", "ember-three-boxes-demo/components/demo/-base-demo-component"], function (_exports, _baseDemoComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main>
    <Demo::Glimmer::Scene @onInit={{this.animate}} as |s|>
      <s.DirectionalLight @x={{-5}} @y={{0}} @z={{-10}} />
      <s.PerspectiveCamera @z={{3.2}} @aspectRatio={{this.aspectRatio}} />
  
      {{#each this.appState.rotations as |rotation|}}
        <s.Box @rotation={{rotation}} />
      {{/each}}
  
    </Demo::Glimmer::Scene>
  </main>
  */
  {
    "id": "SxoObo+e",
    "block": "{\"symbols\":[\"s\",\"rotation\"],\"statements\":[[10,\"main\"],[12],[2,\"\\n  \"],[8,\"demo/glimmer/scene\",[],[[\"@onInit\"],[[32,0,[\"animate\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"DirectionalLight\"]],[],[[\"@x\",\"@y\",\"@z\"],[-5,0,-10]],null],[2,\"\\n    \"],[8,[32,1,[\"PerspectiveCamera\"]],[],[[\"@z\",\"@aspectRatio\"],[3.2,[32,0,[\"aspectRatio\"]]]],null],[2,\"\\n\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"appState\",\"rotations\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,[32,1,[\"Box\"]],[],[[\"@rotation\"],[[32,2]]],null],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/glimmer/index.hbs"
  });

  class DemoComponent extends _baseDemoComponent.default {}

  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-boxes-demo/components/demo/glimmer/scene/box", ["exports", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@glimmer/component", "three"], function (_exports, _applyDecoratedDescriptor2, _component, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{did-update this.updateRotation @rotation}}
  
  */
  {
    "id": "3tXEx6Iu",
    "block": "{\"symbols\":[\"@rotation\"],\"statements\":[[1,[30,[36,0],[[32,0,[\"updateRotation\"]],[32,1]],null]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"did-update\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/glimmer/scene/box.hbs"
  });

  let geometry = new _three.default.BoxGeometry(2, 2, 2);
  let material = new _three.default.MeshNormalMaterial();
  let SceneBoxComponent = (_dec = Ember._action, (_class = class SceneBoxComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      this.mesh = new _three.default.Mesh(geometry, material);
      let r = args.rotation.r;
      this.mesh.rotation.set(r.x, r.y, r.z);
      this.mesh.position.set(0, 0, 0);
      args.scene.add(this.mesh);
    }

    updateRotation(rotation) {
      let r = rotation.r;
      this.mesh.rotation.set(r.x, r.y, r.z);
    }

    willDestroy() {
      this.args.scene.remove(this.mesh);
    }

  }, ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "updateRotation", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "updateRotation"), _class.prototype)), _class));
  _exports.default = SceneBoxComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneBoxComponent);
});
;define("ember-three-boxes-demo/components/demo/glimmer/scene/directional-light", ["exports", "@glimmer/component", "three"], function (_exports, _component, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneDirectionalLightComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        x,
        y,
        z
      } = args;
      this.light = new _three.default.DirectionalLight(0xffffff, 1);
      this.light.position.set(x, y, z).normalize();
      args.scene.add(this.light);
    }

  }

  _exports.default = SceneDirectionalLightComponent;
});
;define("ember-three-boxes-demo/components/demo/glimmer/scene/index", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@glimmer/component", "three"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _component, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div {{did-insert this.setElement}}></div>
  
  {{yield
    (hash
      DirectionalLight=(component 'demo/glimmer/scene/directional-light' scene=this.scene)
      PerspectiveCamera=(component 'demo/glimmer/scene/perspective-camera'
        scene=this.scene
        setCamera=this.setCamera
      )
      Box=(component 'demo/glimmer/scene/box' scene=this.scene)
    )
  }}
  */
  {
    "id": "2gD04wjY",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,\"div\"],[4,[38,0],[[32,0,[\"setElement\"]]],null],[12],[13],[2,\"\\n\\n\"],[18,1,[[30,[36,2],null,[[\"DirectionalLight\",\"PerspectiveCamera\",\"Box\"],[[30,[36,1],[\"demo/glimmer/scene/directional-light\"],[[\"scene\"],[[32,0,[\"scene\"]]]]],[30,[36,1],[\"demo/glimmer/scene/perspective-camera\"],[[\"scene\",\"setCamera\"],[[32,0,[\"scene\"]],[32,0,[\"setCamera\"]]]]],[30,[36,1],[\"demo/glimmer/scene/box\"],[[\"scene\"],[[32,0,[\"scene\"]]]]]]]]]]],\"hasEval\":false,\"upvars\":[\"did-insert\",\"component\",\"hash\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/glimmer/scene/index.hbs"
  });

  let SceneComponent = (_dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, (_class = (_temp = class SceneComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      (0, _defineProperty2.default)(this, "element", undefined);
      this.scene = new _three.default.Scene();
      this.renderer = new _three.default.WebGLRenderer({
        alpha: true,
        antialias: false
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    setElement(element) {
      this.element = element;
      this.element.appendChild(this.renderer.domElement);

      if (this.camera) {
        this.args.onInit(this.render);
      }
    }

    setCamera(camera) {
      this.camera = camera;

      if (this.element) {
        this.args.onInit(this.render);
      }
    }

    render() {
      this.renderer.render(this.scene, this.camera);
    }

    willDestroy() {
      this.renderer.renderLists.dispose();
      this.renderer.dispose();
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "setElement", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setElement"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "setCamera", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setCamera"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "render", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));
  _exports.default = SceneComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneComponent);
});
;define("ember-three-boxes-demo/components/demo/glimmer/scene/perspective-camera", ["exports", "@glimmer/component", "three"], function (_exports, _component, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const defaults = {
    fov: 75,
    near: 0.1,
    far: 1000,
    x: 0,
    y: 0,
    z: 0
  };

  class ScenePerspectiveCameraComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      let options = { ...defaults,
        ...args
      };
      let {
        x,
        y,
        z,
        fov,
        aspectRatio,
        near,
        far
      } = options;
      this.camera = new _three.default.PerspectiveCamera(fov, aspectRatio, near, far);
      this.camera.position.set(x, y, z);
      args.setCamera(this.camera);
    }

  }

  _exports.default = ScenePerspectiveCameraComponent;
});
;define("ember-three-boxes-demo/components/demo/native/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component", "ember-three-boxes-demo/components/demo/native/web-gl-helper"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component, _webGlHelper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main {{did-insert this.setup}}>
  </main>
  
  */
  {
    "id": "Vr7bHxSf",
    "block": "{\"symbols\":[],\"statements\":[[11,\"main\"],[4,[38,0],[[32,0,[\"setup\"]]],null],[12],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"did-insert\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/native/index.hbs"
  });

  function random() {
    return Math.random() * 360;
  }

  function newRotations(num = 20) {
    return Array(num).fill().map(() => [random(), random(), random()]);
  }

  let DemoComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember.inject.service, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class DemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "router", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "appState", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "stats", _descriptor3, this);
      this.router.on("routeDidChange", () => {
        this.onUpdate();
      });
    }

    onUpdate() {
      this.renderer.syncBoxes(newRotations(this.appState.count));
    }

    setup(element) {
      this.renderer = new _webGlHelper.WebGlHelper({
        container: element,
        stats: this.stats
      });
      this.renderer.animate();
      this.onUpdate();
    }

    willDestroy() {
      this.renderer.willDestroy();
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "appState", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "stats", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "onUpdate", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "onUpdate"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "setup", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "setup"), _class.prototype)), _class));
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-boxes-demo/components/demo/native/web-gl-helper", ["exports", "@babel/runtime/helpers/esm/defineProperty", "three"], function (_exports, _defineProperty2, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.WebGlHelper = void 0;
  // Static things that won't change
  let geometry = new _three.default.BoxGeometry(2, 2, 2);
  let material = new _three.default.MeshNormalMaterial();

  class WebGlHelper {
    // for tracking the current frame
    // references to all meshes
    constructor({
      container,
      stats
    }) {
      (0, _defineProperty2.default)(this, "frame", undefined);
      (0, _defineProperty2.default)(this, "boxes", []);
      (0, _defineProperty2.default)(this, "scene", new _three.default.Scene());
      (0, _defineProperty2.default)(this, "light", new _three.default.DirectionalLight(0xffffff, 1));
      (0, _defineProperty2.default)(this, "camera", new _three.default.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
      (0, _defineProperty2.default)(this, "renderer", new _three.default.WebGLRenderer({
        alpha: true,
        antialias: false
      }));
      this.element = container; // fov, ratio, zNear, zFar

      this.camera.position.set(0, 0, 3.2);
      this.light.position.set(-5, 0, -10).normalize();
      this.scene.add(this.light);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.element.appendChild(this.renderer.domElement);
      this.animate = this.animate.bind(this);
      this.stats = stats;
    }

    syncBoxes(rotations) {
      let diff = this.boxes.length - rotations.length;
      let boxesHaveMore = diff > 0;
      let boxesHaveLess = diff < 0;
      let same = diff === 0;
      if (same) return;

      if (boxesHaveLess) {
        for (let i = 0; i < 0 - diff; i++) {
          let rotation = rotations[i];
          this.addBox(rotation);
        }

        return;
      }

      if (boxesHaveMore) {
        for (let i = 0; i < diff; i++) {
          let box = this.boxes.pop();
          this.scene.remove(box);
        }

        return;
      }
    }

    addBox(rotation) {
      let mesh = new _three.default.Mesh(geometry, material);
      mesh.rotation.set(...rotation);
      this.scene.add(mesh);
      this.boxes.push(mesh);
    }

    animate() {
      let boundCallback;

      function loop() {
        this.stats.begin();
        this.frame = requestAnimationFrame(boundCallback);

        for (let i = 0; i < this.boxes.length; i++) {
          let box = this.boxes[i];
          box.rotation.x += 0.01;
          box.rotation.y += 0.01;
          box.rotation.z += 0.01;
        }

        this.renderer.render(this.scene, this.camera);
        this.stats.end();
      }

      boundCallback = loop.bind(this);
      this.frame = requestAnimationFrame(boundCallback);
    }

    willDestroy() {
      cancelAnimationFrame(this.frame);
      this.renderer.renderLists.dispose();
      this.renderer.dispose(); // this.scene.dispose();
    }

  }

  _exports.WebGlHelper = WebGlHelper;
});
;define("ember-three-boxes-demo/components/demo/without-templates/index", ["exports", "ember-three-boxes-demo/components/demo/-base-demo-component"], function (_exports, _baseDemoComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main>
    <Demo::WithoutTemplates::Scene @onInit={{this.animate}} as |s|>
      <s.DirectionalLight @x={{-5}} @y={{0}} @z={{-10}} />
      <s.PerspectiveCamera @z={{3.2}} @aspectRatio={{this.aspectRatio}} />
  
      {{#each this.appState.rotations as |rotation|}}
        <s.Box @rotation={{rotation}}/>
      {{/each}}
  
    </Demo::WithoutTemplates::Scene>
  </main>
  */
  {
    "id": "Ib3nUJxk",
    "block": "{\"symbols\":[\"s\",\"rotation\"],\"statements\":[[10,\"main\"],[12],[2,\"\\n  \"],[8,\"demo/without-templates/scene\",[],[[\"@onInit\"],[[32,0,[\"animate\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"DirectionalLight\"]],[],[[\"@x\",\"@y\",\"@z\"],[-5,0,-10]],null],[2,\"\\n    \"],[8,[32,1,[\"PerspectiveCamera\"]],[],[[\"@z\",\"@aspectRatio\"],[3.2,[32,0,[\"aspectRatio\"]]]],null],[2,\"\\n\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"appState\",\"rotations\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,[32,1,[\"Box\"]],[],[[\"@rotation\"],[[32,2]]],null],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/without-templates/index.hbs"
  });

  class CustomComponents extends _baseDemoComponent.default {}

  _exports.default = CustomComponents;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, CustomComponents);
});
;define("ember-three-boxes-demo/components/demo/without-templates/scene/box", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component", "ember-could-get-used-to-this", "three"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component, _emberCouldGetUsedToThis, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  const noop = (...args) => args;

  let Box = (_class = (_temp = class Box extends _component.default {
    constructor(...e) {
      super(...e); // box needs to be accessed, or *something* assumes box isn't used
      // and removes it from the class?

      (0, _initializerDefineProperty2.default)(this, "box", _descriptor, this);
      noop(this.box, this.args, this.args.rotation);
    } // TODO: no way to pass named args?


  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "box", [_emberCouldGetUsedToThis.use], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new ReactiveBox(() => {
        let {
          scene,
          rotation
        } = this.args;
        return [scene, rotation.r];
      });
    }
  })), _class);
  _exports.default = Box;
  const geometry = new _three.default.BoxGeometry(2, 2, 2);
  const material = new _three.default.MeshNormalMaterial(); // Maybe this needs to be an effect?
  // a resource doesn't seem to update when I want.
  //
  // the box spins when I click on the above component in ember inspector.
  // the box stops spinning if I click on args.
  // or anything else

  class ReactiveBox extends _emberCouldGetUsedToThis.Resource {
    get rotation() {
      return this.args.positional[1];
    }

    get scene() {
      return this.args.positional[0];
    }

    setup() {
      let {
        x,
        y,
        z
      } = this.rotation;
      this.mesh = new _three.default.Mesh(geometry, material);
      this.mesh.rotation.set(x, y, z);
      this.mesh.position.set(0, 0, 0);
      this.scene.add(this.mesh);
    }

    update() {
      let {
        x,
        y,
        z
      } = this.rotation;
      this.mesh.rotation.set(x, y, z);
      this.mesh.position.set(0, 0, 0);
    }

    teardown() {
      this.scene.remove(this.mesh);
    }

  }
});
;define("ember-three-boxes-demo/components/demo/without-templates/scene/directional-light", ["exports", "ember-lifecycle-component", "three"], function (_exports, _emberLifecycleComponent, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneDirectionalLightComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor(owner, args) {
      super(owner, args);
      let {
        x,
        y,
        z
      } = args;
      this.light = new _three.default.DirectionalLight(0xffffff, 1);
      this.light.position.set(x, y, z).normalize();
      args.scene.add(this.light);
    }

  }

  _exports.default = SceneDirectionalLightComponent;
});
;define("ember-three-boxes-demo/components/demo/without-templates/scene/index", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "ember-lifecycle-component", "three"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2, _emberLifecycleComponent, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div {{did-insert this.setElement}}></div>
  
  {{yield
    (hash
      DirectionalLight=(component 'demo/without-templates/scene/directional-light' scene=this.scene)
      PerspectiveCamera=(component 'demo/without-templates/scene/perspective-camera'
        scene=this.scene
        setCamera=this.setCamera
      )
      Box=(component 'demo/without-templates/scene/box' scene=this.scene)
      scene=this.scene
    )
  }}
  */
  {
    "id": "YFxsur4a",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,\"div\"],[4,[38,0],[[32,0,[\"setElement\"]]],null],[12],[13],[2,\"\\n\\n\"],[18,1,[[30,[36,2],null,[[\"DirectionalLight\",\"PerspectiveCamera\",\"Box\",\"scene\"],[[30,[36,1],[\"demo/without-templates/scene/directional-light\"],[[\"scene\"],[[32,0,[\"scene\"]]]]],[30,[36,1],[\"demo/without-templates/scene/perspective-camera\"],[[\"scene\",\"setCamera\"],[[32,0,[\"scene\"]],[32,0,[\"setCamera\"]]]]],[30,[36,1],[\"demo/without-templates/scene/box\"],[[\"scene\"],[[32,0,[\"scene\"]]]]],[32,0,[\"scene\"]]]]]]]],\"hasEval\":false,\"upvars\":[\"did-insert\",\"component\",\"hash\"]}",
    "moduleName": "ember-three-boxes-demo/components/demo/without-templates/scene/index.hbs"
  });

  let SceneComponent = (_dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, (_class = (_temp = class SceneComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor(owner, args) {
      super(owner, args);
      (0, _defineProperty2.default)(this, "element", undefined);
      this.scene = new _three.default.Scene();
      this.renderer = new _three.default.WebGLRenderer({
        alpha: true,
        antialias: false
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    setElement(element) {
      this.element = element;
      this.element.appendChild(this.renderer.domElement);

      if (this.camera) {
        this.args.onInit(this.render);
      }
    }

    setCamera(camera) {
      this.camera = camera;

      if (this.element) {
        this.args.onInit(this.render);
      }
    }

    render() {
      this.renderer.render(this.scene, this.camera);
    }

    willDestroy() {
      this.renderer.renderLists.dispose();
      this.renderer.dispose(); // this.scene.dispose();
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "setElement", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "setElement"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "setCamera", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setCamera"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "render", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));
  _exports.default = SceneComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneComponent);
});
;define("ember-three-boxes-demo/components/demo/without-templates/scene/perspective-camera", ["exports", "ember-lifecycle-component", "three"], function (_exports, _emberLifecycleComponent, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const defaults = {
    fov: 75,
    near: 0.1,
    far: 1000,
    x: 0,
    y: 0,
    z: 0
  };

  class ScenePerspectiveCameraComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor(owner, args) {
      super(owner, args);
      let options = { ...defaults,
        ...args
      };
      let {
        x,
        y,
        z,
        fov,
        aspectRatio,
        near,
        far
      } = options;
      this.camera = new _three.default.PerspectiveCamera(fov, aspectRatio, near, far);
      this.camera.position.set(x, y, z);
      args.setCamera(this.camera);
    }

  }

  _exports.default = ScenePerspectiveCameraComponent;
});
;define("ember-three-boxes-demo/components/external-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <a target="_blank" rel="noreferrer noopener" ...attributes>
    {{yield}}
  </a>
  */
  {
    "id": "wWZzAh6b",
    "block": "{\"symbols\":[\"&attrs\",\"&default\"],\"statements\":[[11,\"a\"],[24,\"target\",\"_blank\"],[24,\"rel\",\"noreferrer noopener\"],[17,1],[12],[2,\"\\n  \"],[18,2,null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-three-boxes-demo/components/external-link.hbs"
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("ember-three-boxes-demo/components/info", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="info">
    <p>
      <ExternalLink href="https://github.com/NullVoxPopuli/ember-three-boxes-demo">
        github.com/NullVoxPopuli/ember-three-boxes-demo
      </ExternalLink>
    </p>
  </div>
  */
  {
    "id": "wke3iexb",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"info\"],[12],[2,\"\\n  \"],[10,\"p\"],[12],[2,\"\\n    \"],[8,\"external-link\",[[24,6,\"https://github.com/NullVoxPopuli/ember-three-boxes-demo\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n      github.com/NullVoxPopuli/ember-three-boxes-demo\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-three-boxes-demo/components/info.hbs"
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("ember-three-boxes-demo/components/navigation", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav>
    <header><strong>Demos</strong></header>
    <LinkTo @route='index'>Native JS</LinkTo>
    <LinkTo @route='with-ember'>@ember/component</LinkTo>
    <br>
    <LinkTo @route='with-glimmer'>@glimmer/component</LinkTo>
    <LinkTo @route='without-templates'>Soon: with @use Resource</LinkTo>
  </nav>
  
  */
  {
    "id": "D0Sl8HmD",
    "block": "{\"symbols\":[],\"statements\":[[10,\"nav\"],[12],[2,\"\\n  \"],[10,\"header\"],[12],[10,\"strong\"],[12],[2,\"Demos\"],[13],[13],[2,\"\\n  \"],[8,\"link-to\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"Native JS\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"link-to\",[],[[\"@route\"],[\"with-ember\"]],[[\"default\"],[{\"statements\":[[2,\"@ember/component\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"br\"],[12],[13],[2,\"\\n  \"],[8,\"link-to\",[],[[\"@route\"],[\"with-glimmer\"]],[[\"default\"],[{\"statements\":[[2,\"@glimmer/component\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[8,\"link-to\",[],[[\"@route\"],[\"without-templates\"]],[[\"default\"],[{\"statements\":[[2,\"Soon: with @use Resource\"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-three-boxes-demo/components/navigation.hbs"
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("ember-three-boxes-demo/controllers/application", ["exports", "@babel/runtime/helpers/esm/defineProperty"], function (_exports, _defineProperty2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationController extends Ember.Controller {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "queryParams", ['n']);
    }

  }

  _exports.default = ApplicationController;
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
;define("ember-three-boxes-demo/helpers/did-update", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function didUpdate(params
  /*, hash*/
  ) {
    let [fn, ...args] = params;
    return fn(...args);
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/helpers/directional-light", [], function () {
  "use strict";
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
;define("ember-three-boxes-demo/helpers/perspective-camera", [], function () {
  "use strict";
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
;define("ember-three-boxes-demo/initializers/usable-function-manager", ["exports", "ember-could-get-used-to-this/initializers/usable-function-manager"], function (_exports, _usableFunctionManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _usableFunctionManager.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _usableFunctionManager.initialize;
    }
  });
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
    this.route('with-glimmer');
    this.route('with-ember');
    this.route('without-templates');
  });
});
;define("ember-three-boxes-demo/routes/demo-with-custom-component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class DemoWithCustomComponentRoute extends Ember.Route {}

  _exports.default = DemoWithCustomComponentRoute;
});
;define("ember-three-boxes-demo/routes/with-components", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class WithComponentsRoute extends Ember.Route {}

  _exports.default = WithComponentsRoute;
});
;define("ember-three-boxes-demo/services/app-state", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-three-boxes-demo/utils/utils"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _temp;

  const DEFAULT_COUNT = 1;
  let AppStateService = (_dec = Ember.inject.service, _dec2 = Ember._cached, (_class = (_temp = class AppStateService extends Ember.Service {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "router", _descriptor, this);
    }

    get rotations() {
      return (0, _utils.newRotations)(this.count);
    }

    get count() {
      let qps = this.router.currentRoute.queryParams;
      let {
        n
      } = qps || {};

      if (n) {
        let parsedInt = parseInt(n, 10);
        return parsedInt || DEFAULT_COUNT;
      }

      return DEFAULT_COUNT;
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "rotations", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "rotations"), _class.prototype)), _class));
  _exports.default = AppStateService;
});
;define("ember-three-boxes-demo/services/stats", ["exports", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "stats.js"], function (_exports, _applyDecoratedDescriptor2, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class;

  // https://github.com/mrdoob/stats.js
  let StatsService = (_dec = Ember._action, _dec2 = Ember._action, (_class = class StatsService extends Ember.Service {
    constructor() {
      super(...arguments);
      let stats = new _stats.default();
      stats.showPanel(0);
      stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom

      stats.showPanel(2); // is this the plural?

      let canvaii = stats.dom.querySelectorAll('canvas');

      for (let canvas of canvaii) {
        canvas.style.display = 'block';
      }

      document.body.appendChild(stats.dom);
      this.stats = stats;
    }

    begin() {
      this.stats.begin();
    }

    end() {
      this.stats.end();
    }

  }, ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "begin", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "begin"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "end", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "end"), _class.prototype)), _class));
  _exports.default = StatsService;
});
;define("ember-three-boxes-demo/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Xn45o1eI",
    "block": "{\"symbols\":[],\"statements\":[[8,\"navigation\",[],[[],[]],null],[2,\"\\n\"],[8,\"info\",[],[[],[]],null],[2,\"\\n\"],[8,\"controls\",[],[[],[]],null],[2,\"\\n\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "ember-three-boxes-demo/templates/application.hbs"
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
    "id": "UcoIC7QH",
    "block": "{\"symbols\":[],\"statements\":[[8,\"demo/native\",[],[[],[]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-three-boxes-demo/templates/index.hbs"
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/templates/with-ember", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QuCKiFVp",
    "block": "{\"symbols\":[],\"statements\":[[8,\"demo/ember\",[],[[],[]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-three-boxes-demo/templates/with-ember.hbs"
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/templates/with-glimmer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "x9xBtI2z",
    "block": "{\"symbols\":[],\"statements\":[[8,\"demo/glimmer\",[],[[],[]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-three-boxes-demo/templates/with-glimmer.hbs"
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/templates/without-templates", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "k8TtySEE",
    "block": "{\"symbols\":[],\"statements\":[[8,\"demo/without-templates\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-three-boxes-demo/templates/without-templates.hbs"
  });

  _exports.default = _default;
});
;define("ember-three-boxes-demo/utils/utils", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "tracked-built-ins"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _trackedBuiltIns) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.random = random;
  _exports.newRotations = newRotations;
  _exports.Rotation = _exports.Optimized = void 0;

  var _dec, _class, _descriptor, _temp, _dec2, _dec3, _dec4, _class3, _descriptor2, _descriptor3, _descriptor4, _temp2;

  function random() {
    return Math.random() * 360;
  }

  let Optimized = (_dec = Ember._tracked, (_class = (_temp = class Optimized {
    // this single tracked property is used so that we can
    // minimize object creation / destruction when
    // updating frames.
    // If we were to only work with x/y/z directly,
    // we'd need to pass each of those as args separately in order for
    // modifier-based updates to be seen
    constructor(defaults) {
      (0, _initializerDefineProperty2.default)(this, "r", _descriptor, this);
      if (defaults) this.r = defaults;
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "r", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {
        x: 0,
        y: 0,
        z: 0
      };
    }
  })), _class));
  _exports.Optimized = Optimized;
  let Rotation = (_dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, (_class3 = (_temp2 = class Rotation {
    constructor(defaults) {
      (0, _initializerDefineProperty2.default)(this, "x", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "y", _descriptor3, this);
      (0, _initializerDefineProperty2.default)(this, "z", _descriptor4, this);
      if (defaults) this.r = defaults;
    }

  }, _temp2), (_descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class3.prototype, "x", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class3.prototype, "y", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class3.prototype, "z", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  })), _class3));
  _exports.Rotation = Rotation;

  function newRotations(num = 20) {
    let values = Array(num).fill().map(() => {
      let x = random();
      let y = random();
      let z = random();
      return new Optimized({
        x,
        y,
        z
      }); // return new TrackedObject({ x, y, z });
      // return new Rotation({ x, y, z });
    });
    return values;
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
            require("ember-three-boxes-demo/app")["default"].create({"name":"ember-three-boxes-demo","version":"0.0.0+3819be53"});
          }
        
