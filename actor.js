AFRAME.registerComponent('line-draw', {
    // this.mouse = new THREE.Vector2();
    // this.scene = this.el.sceneEl;
    // this.camera = this.scene.camera;
    // this.obj = this.el.object3D;
    init: function() {
        this.el.addEventListener('click', function (e) {
            console.log(e.detail.intersection.point);
            // let rc = new THREE.Raycaster();
            // rc.setFromCamera(this.mouse, this.camera);
            // let dist = this.obj.position.distanceTo(this.camera.position);
            // let point = rc.ray.at(dist);
            var camera = document.querySelector('#camera')
            var sphere = document.querySelector('a-sphere');
            var cylinder = document.querySelector('a-cylinder');
            var curve_center = document.querySelector('#curve-point-center');
            //sphere.setAttribute('position', e.detail.intersection.point);
            cylinder.setAttribute('position', e.detail.intersection.point);
            curve_center.setAttribute('position', e.detail.intersection.point);
            camera.setAttribute('position', {x: 0, y: 0, z: 0});
            cylinder.setAttribute('height', 18);
            sphere.setAttribute('position', {x: 0, y: 9, z: 0})
            //camera.setAttribute('rotation', {x: 1.948, y: 88.865, z: -1.776});
            console.log(camera.components.position);
            console.log(cylinder.getDOMAttribute('geometry').height);
            console.log(sphere.position);
            // console.log(sphere.position);
        });
    },
});