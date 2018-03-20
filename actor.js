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
            var sphere = document.querySelector('a-sphere');
            var cylinder = document.querySelector('a-cylinder');
            var curve_center = document.querySelector('#curve-point-center');
            //sphere.setAttribute('position', e.detail.intersection.point);
            cylinder.setAttribute('position', e.detail.intersection.point);
            curve_center.setAttribute('position', e.detail.intersection.point);
            // console.log(sphere.position);
        });
    },
});