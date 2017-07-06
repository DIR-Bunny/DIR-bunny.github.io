/*var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			animate();
			
			
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000);
			
			var renderer = new THREE.WebGLRenderer({
			  alpha: true // remove canvas' bg color
			});
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			var geometry = new THREE.Geometry();
			geometry.vertices.push(new THREE.Vector4(0, -10, 0));
			geometry.vertices.push(new THREE.Vector4(0, 10, 0));
			geometry.vertices.push(new THREE.Vector4(10, 0, 0));
			geometry.vertices.push(new THREE.Vector4(-10, 0, 0));
			geometry.vertices.push(new THREE.Vector4(10, 10, 0));
			geometry.vertices.push(new THREE.Vector4(-10, -10, 0));
			var material = new THREE.LineBasicMaterial({ color: 0xff0000 });
			
			var line = new THREE.Line(geometry, material);
			*/
			
			/*
			var renderer, scene, camera;
			var line;
			var count = 0;
			var mouse = new THREE.Vector3();
			init();
			animate();
			function init() {

			  // info
			  var info = document.createElement('div');
			  info.style.position = 'absolute';
			  info.style.top = '30px';
			  info.style.width = '100%';
			  info.style.textAlign = 'center';
			  info.style.color = '#fff';
			  info.style.fontWeight = 'bold';
			  info.style.backgroundColor = 'transparent';
			  info.style.zIndex = '1';
			  info.style.fontFamily = 'Monospace';
			  info.innerHTML = "three.js - animated line using BufferGeometry";
			  document.body.appendChild(info);

			  // renderer
			  renderer = new THREE.WebGLRenderer();

			  renderer.setSize(window.innerWidth, window.innerHeight);
			  document.body.appendChild(renderer.domElement);

			  // scene
			  scene = new THREE.Scene();

			  // camera
			  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
			  camera.position.set(0, 0, 1000);

			  // geometry
			  var geometry = new THREE.BufferGeometry();
			  var MAX_POINTS = 500;
			  positions = new Float32Array(MAX_POINTS * 3);
			  geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

			  // material
			  var material = new THREE.LineBasicMaterial({
				color: 0xff0000,
				linewidth: 2
			  });

			  // line
			  line = new THREE.Line(geometry, material);
			  scene.add(line);

			  document.addEventListener("mousemove", onMouseMove, false);
			  document.addEventListener('mousedown', onMouseDown, false);
			}

			// update line
			function updateLine() {
			  positions[count * 3 - 3] = mouse.x;
			  positions[count * 3 - 2] = mouse.y;
			  positions[count * 3 - 1] = mouse.z;
			  line.geometry.attributes.position.needsUpdate = true;
			}

			// mouse move handler
			function onMouseMove(event) {
			  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			  mouse.z = 0;
			  mouse.unproject(camera);
			  if( count !== 0 ){
				updateLine();
			  }
			}

			// add point
			function addPoint(event){
			  console.log("point nr " + count + ": " + mouse.x + " " + mouse.y + " " + mouse.z);
			  positions[count * 3 + 0] = mouse.x;
			  positions[count * 3 + 1] = mouse.y;
			  positions[count * 3 + 2] = mouse.z;
			  count++;
			  line.geometry.setDrawRange(0, count);
			  updateLine();
			}

			// mouse down handler
			function onMouseDown(evt) {
			  // on first click add an extra point
			  if( count === 0 ){
				  addPoint();
			  }
			  addPoint();
			}

			// render
			function render() {
			  renderer.render(scene, camera);
			}

			// animate
			function animate() {
			  requestAnimationFrame(animate);
			  render();
			}
		*/
		
		
		///////////////////////////////Hollow Cube with rotate /////////////////////////////////////////////////////////
		/*
										  var scene = new THREE.Scene();
								  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
								  var renderer = new THREE.WebGLRenderer();

								  renderer.setClearColor(0x000000);
								  renderer.setSize(window.innerWidth, window.innerHeight);

								  var axis = new THREE.AxisHelper(10);
								  scene.add(axis);

								  var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
								  var cubeMaterial = new THREE.MeshBasicMaterial({
									color: 0xdddddd,
									wireframe: true
								  });
								  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

								  cube.position.x = 0;
								  cube.position.y = 0;
								  cube.position.z = 0;

								  scene.add(cube);

								  camera.position.x = 40;
								  camera.position.y = 40;
								  camera.position.z = 40;

								  camera.lookAt(scene.position);
										var animate = function () {
												             

												renderer.render(scene, camera);
											};

											animate();
								  $("#webGL-container").append(renderer.domElement);
										
										
										
		*/
		
		
		//////////////////////////////////////////////////Cube animation with shadow and spotlight
		/*
			$(function() {
			  var scene = new THREE.Scene();
			  var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
			  var renderer = new THREE.WebGLRenderer({
						  alpha: true // remove canvas' bg color
						});

			  renderer.setClearColor(0x000000);
			  renderer.setSize(window.innerWidth, window.innerHeight);
				renderer.shadowMapEnabled = true;
				renderer.shadowMapSoft = true;
			  var axis = new THREE.AxisHelper(100);
			  scene.add(axis);

			//Hexadecimal color (recommended)
			var color1 = new THREE.Color( 0xff0000 );
			  var color = new THREE.Color("rgb(255,0,0)");
			  
			   var grid = new THREE.GridHelper(100,10,color,color1);
			   
			   
			 scene.add(grid);

			  var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
			  var cubeMaterial = new THREE.MeshLambertMaterial({
				color: 0xff0000
			  });
			  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

			  cube.position.x = 2.5;
			  cube.position.y = 5;
			  cube.position.z = 2.5;
			  cube.castShadow = true;
			  scene.add(cube);
			  
			  var planeGeo = new THREE.PlaneGeometry(30,30,30);
			  var planeMat = new THREE.MeshLambertMaterial({
				color: 0xC0C0C0
			  });
			var plane = new THREE.Mesh(planeGeo,planeMat);
			plane.rotation.x = -0.5 * Math.PI;
			plane.receiveShadow = true;
			scene.add(plane);


			var spotLight = new THREE.SpotLight( 0xffffff );
			spotLight.position.set( 10, 10, 50 );

			spotLight.castShadow = true;
			scene.add(spotLight);

			  camera.position.x = 40;
			  camera.position.y = 40;
			  camera.position.z = 40;

			  camera.lookAt(scene.position);
					var animate = function () {
							requestAnimationFrame( animate );
						
							cube.rotation.x += 0.015;
							cube.rotation.y += 0.015;
							cube.rotation.z += 0.015; 
							renderer.render(scene, camera);
						};

						animate();
			  $("#webGL-container").append(renderer.domElement);

			});
		*/
		
		
		
		
		////////////////////////////////////////////////////CUBE roation with DAT GUI controls/////////////////////////////////////////////
		/*
							$(function() {
				  var scene = new THREE.Scene();
				  var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
				  renderer = new THREE.WebGLRenderer({antialias:true});
		
					renderer.setClearColor(0xdddddd);
					renderer.setSize(window.innerWidth, window.innerHeight);
					renderer.shadowMapEnabled= true;
					renderer.shadowMapSoft = true;
				  var axis = new THREE.AxisHelper(100);
				  scene.add(axis);

				//Hexadecimal color (recommended)
				var color1 = new THREE.Color( 0xff0000 );
				  var color = new THREE.Color("rgb(255,0,0)");
				  
				   var grid = new THREE.GridHelper(100,10,color,color1);
				   
				   
				 scene.add(grid);

				  var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
				  var cubeMaterial = new THREE.MeshLambertMaterial({
					color: 0xff0000
				  });
				  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

				  cube.position.x = 2.5;
				  cube.position.y = 5;
				  cube.position.z = 2.5;
				  cube.castShadow = true;
				  scene.add(cube);
				  
				  var planeGeo = new THREE.PlaneGeometry(30,30,30);
				  var planeMat = new THREE.MeshLambertMaterial({
					color: 0xC0C0C0
				  });
				var plane = new THREE.Mesh(planeGeo,planeMat);
				plane.rotation.x = -0.5 * Math.PI;
				plane.receiveShadow = true;
				scene.add(plane);


				var spotLight = new THREE.SpotLight( 0xffffff );
				spotLight.position.set( 10, 10, 50 );

				spotLight.castShadow = true;
				scene.add(spotLight);

				  camera.position.x = 40;
				  camera.position.y = 40;
				  camera.position.z = 40;

				  camera.lookAt(scene.position);
				  
				  var GUIControls = new function()
				  {
					this.rotationX = 0.01;
					this.rotationY = 0.01;
					this.rotationZ = 0.01;
				  }
				  
				  var datGUI = new dat.GUI();
				  datGUI.add(GUIControls , 'rotationX',0,150);
				  datGUI.add(GUIControls , 'rotationY',0,150);
				  datGUI.add(GUIControls , 'rotationZ',0,150);
				  
				  
						var animate = function () {
								requestAnimationFrame( animate );
							
								cube.rotation.x += GUIControls.rotationX;
								cube.rotation.y += GUIControls.rotationY;
								cube.rotation.z += GUIControls.rotationZ;
								renderer.render(scene, camera);
							};

							animate();
				  $("#webGL-container").append(renderer.domElement);

				});
			
			
		*/












///////////////////////////////////////////////////ORBIT Controller///////////////////////////////////////////////////////
/*

$(function() {

 /////////////////////////Scene Camera renderer//////////////////////////////////
				  var scene = new THREE.Scene();
				  var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
				  renderer = new THREE.WebGLRenderer({antialias:true});
		
					renderer.setClearColor(0xdddddd);
					renderer.setSize(window.innerWidth, window.innerHeight);
					renderer.shadowMap.enabled= true;
					renderer.shadowMapSoft = true;
					
 /////////////////////////Axiz Helper//////////////////////////////////					
				  var axis = new THREE.AxisHelper(100);
				  scene.add(axis);
/////////////////////////////////////////////////////////////////////////////


 /////////////////////////Grid//////////////////////////////////
				//Hexadecimal color (recommended)
				var color1 = new THREE.Color( 0xff0000 );
				  var color = new THREE.Color("rgb(255,0,0)");
				  
				   var grid = new THREE.GridHelper(100,10,color,color1);
				   
				   
				 scene.add(grid);
/////////////////////////////////////////////////////////////////////////////


 /////////////////////////Cube//////////////////////////////////
				  var cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
				  var cubeMaterial = new THREE.MeshLambertMaterial({
					color: 0xff0000
				  });
				  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

				  cube.position.x = 2.5;
				  cube.position.y = 5;
				  cube.position.z = 2.5;
				  cube.castShadow = true;
				  scene.add(cube);
			/////////////////////////////////////////////////////////////////////////////	  
			
			
 /////////////////////////TorusKnot//////////////////////////////////			
				   var torusKnotGeometry = new THREE.TorusKnotGeometry( 3, 1, 64, 64); 
				  var torusKnotMaterial = new THREE.MeshLambertMaterial({
					color: 0xffff00
				  });
				  var torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);

				  torusKnot.position.x = -10;
				  torusKnot.position.y = 5;
				  torusKnot.position.z = 2.5;
				  torusKnot.castShadow = true;
				  scene.add(torusKnot);
		/////////////////////////////////////////////////////////////////////////////		  
				  			  
							  
 /////////////////////////Plane//////////////////////////////////							  
				  var planeGeo = new THREE.PlaneGeometry(60,60,60);
				  var planeMat = new THREE.MeshLambertMaterial({
					color: 0xC0C0C0
				  });
				var plane = new THREE.Mesh(planeGeo,planeMat);
				plane.rotation.x = -0.5 * Math.PI;
				plane.receiveShadow = true;
				scene.add(plane);
/////////////////////////////////////////////////////////////////////////////


 /////////////////////////SpotLight//////////////////////////////////
				var spotLight = new THREE.SpotLight( 0xffffff );
				spotLight.position.set( 10, 30, 50 );
				spotLight.angle = Math.PI / 4;
				spotLight.castShadow = true;
				scene.add(spotLight);
/////////////////////////////////////////////////////////////////////////////

//////////////////////////////SpotLighat and Camera Helper///////////////////////////////////////////////
lightHelper = new THREE.SpotLightHelper( spotLight );
				scene.add( lightHelper );
shadowCameraHelper = new THREE.CameraHelper( spotLight.shadow.camera );
scene.add( shadowCameraHelper );				
				
				 /////////////////////////SpotLight Helpers//////////////////////////////////
				var spotLightHelper = new THREE.SpotLightHelper( spotLight );
				scene.add( spotLightHelper );
				
				  camera.position.x = 40;
				  camera.position.y = 40;
				  camera.position.z = 40;

				  camera.lookAt(scene.position);
				 ///////////////////////////////////////////////////////////////////////////// 
				  
				  
				  
				   /////////////////////////GUI controls //////////////////////////////////
				  var GUIControls = new function()
				  {
					this.rotationX = 0.01;
					this.rotationY = 0.01;
					this.rotationZ = 0.01;
				  }
				  
				  
				  
				  
				  
				  
				  /////////////////////////Orbit controls //////////////////////////////////
				  var controls = new THREE.OrbitControls( camera, renderer.domElement );
				  controls.maxPolarAngle = Math.PI/2; ////////////////////// Force viewing angle
				  controls.addEventListener( 'change', render );
				  /////////////////////////////////////////////////////////////////////////////
				  
				  
				  
				  window.addEventListener( 'resize', onResize, false );
				  var datGUI = new dat.GUI();
				  datGUI.add(GUIControls , 'rotationX',0,1);
				  datGUI.add(GUIControls , 'rotationY',0,1);
				  datGUI.add(GUIControls , 'rotationZ',0,1);
				  /////////////////////////////////////////////////////////////////////////////
				  
				  function render() 
			{
				lightHelper.update();
				shadowCameraHelper.update();
				renderer.render( scene, camera );
			}
			/////////////////////////////////////////////////////////////////////////////	  
				  
				  function onResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			/////////////////////////////////////////////////////////////////////////////	  
						var animate = function () {
								requestAnimationFrame( animate );
							
								cube.rotation.x += GUIControls.rotationX;
								cube.rotation.y += GUIControls.rotationY;
								cube.rotation.z += GUIControls.rotationZ;
								torusKnot.rotation.x += GUIControls.rotationX;
								torusKnot.rotation.y += GUIControls.rotationY;
								torusKnot.rotation.z += GUIControls.rotationZ;
								renderer.render(scene, camera);
							};
/////////////////////////////////////////////////////////////////////////////
				

				animate();
				  $("#webGL-container").append(renderer.domElement);

				});


*/





///////////////////////////////////////////Create Any shape grometry/////////////////////////
		$(function(){
    
    var scene, camera, renderer;
    var controls, guiControls, datGUI;

    var sphereGeometry,  planeGeometry;
    var torMaterial, planeMaterial;
    var torusKnot, plane, torusLine;
    var stats;
    var sphereMaterialLineBasic, sphereMaterialDashed;
    var SCREEN_WIDTH, SCREEN_HEIGHT;
    var ani = 0
    
    function init(){    
        /*creates empty scene object and renderer*/
        scene = new THREE.Scene();
        camera =  new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
        renderer = new THREE.WebGLRenderer({antialias:true});
        
        renderer.setClearColor(0x000000);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled= true;
        renderer.shadowMapSoft = true;
        
        /*add controls*/
        controls = new THREE.OrbitControls( camera, renderer.domElement );
        controls.addEventListener( 'change', render );
        
        
        /*create torus knot*/   
        sphereGeometry = new THREE.SphereGeometry( 6, 64, 64); 
        sphereMaterialLineBasic = new THREE.LineBasicMaterial( {            
            linewidth: 2,
            color: 0xffc3c3,
            } );
        sphereMaterialDashed = new THREE.LineDashedMaterial( {
            color: 0xffc3c3,
            dashSize: 3,
            scale:1,
            gapSize:1,
            lineWidth:5
            } );
			
			var geometry = new THREE.RingGeometry( 1, 5, 32 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			//var cube = new THREE.Mesh( geometry, material );
			//scene.add( cube );
		var geometry1 = new THREE.CylinderGeometry( 5, 5, 20, 32 );
        torusLine =  new THREE.Line(geo2line(geometry), sphereMaterialDashed, THREE.LinePieces);
            torusLine1 =  new THREE.Line(geo2line(geometry1), sphereMaterialDashed, THREE.LinePieces);
        /*position and add objects to scene*/
        
        torusLine.position.x = -5;
        torusLine.position.y = 6;
        torusLine.position.z = 2.5;
        torusLine.castShadow = false;
        scene.add( torusLine );
		
		    torusLine1.position.x = 10;
        torusLine1.position.y = 10;
        torusLine1.position.z = 5;
        torusLine1.castShadow = false;
        scene.add( torusLine1 );
        
            
        camera.position.x = 10;
        camera.position.y = 20;
        camera.position.z = 10; 
        camera.lookAt(scene.position);
        
        /*datGUI controls object*/
        guiControls = new function(){
        /*geo  position*/
        this.rotationX  = 0.00;
        this.rotationY  = 0.01;
        this.rotationZ  = 0.00;
        
        
        /*line material*/
        this.material='dashed';
        this.color='#ffc3c3';                   
        this.scale=1;
        this.dashSize=.0001;
        this.gapSize=1;
        }
        

        

        /*adds controls to scene*/
        datGUI = new dat.GUI();
        var rotFolder = datGUI.addFolder('Rotation  Options');
        var materialFolder = datGUI.addFolder('Material Options');
        materialFolder.open();
        
        rotFolder.add(guiControls, 'rotationX',0,1);
        rotFolder.add(guiControls, 'rotationY',0,1);    
        rotFolder.add(guiControls, 'rotationZ',0,1);
        


        materialFolder.add(guiControls, 'material', ['solid' , 'dashed']).onChange(function(value){
            if (value == 'solid'){
                torusLine.material = sphereMaterialLineBasic;
				torusLine1.material = sphereMaterialLineBasic;
            }
            else if (value == 'dashed'){
                torusLine.material = sphereMaterialDashed;
				torusLine1.material = sphereMaterialDashed;
            }
        }); 
        
        materialFolder.addColor(guiControls, 'color').onChange(function(value){
            torusLine.material.color.setHex (value.replace('#','0x'));
			torusLine1.material.color.setHex (value.replace('#','0x'));
        });
        materialFolder.add(guiControls, 'dashSize',0, 1).listen();
        materialFolder.add(guiControls, 'gapSize',0, 3).step(.05).onChange(function(value){
            torusLine.material.gapSize = value;
			torusLine1.material.gapSize = value;
        });
    datGUI.close();
        $("#webGL-container").append(renderer.domElement);
        /*stats*/
        stats = new Stats();        
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';     
        $("#webGL-container").append( stats.domElement );
        
    }

        
    function geo2line( geo ) {

        var geometry = new THREE.Geometry();
        var vertices = geometry.vertices;

        for ( i = 0; i < geo.faces.length; i++ ) {

            var face = geo.faces[ i ];

            if ( face instanceof THREE.Face3 ) {

                    vertices.push( geo.vertices[ face.a ].clone() );
                    vertices.push( geo.vertices[ face.b ].clone() );
                    vertices.push( geo.vertices[ face.b ].clone() );
                    vertices.push( geo.vertices[ face.c ].clone() );
                    vertices.push( geo.vertices[ face.c ].clone() );
                    vertices.push( geo.vertices[ face.a ].clone() );

            } else if ( face instanceof THREE.Face4 ) {

                    vertices.push( geo.vertices[ face.a ].clone() );
                    vertices.push( geo.vertices[ face.b ].clone() );
                    vertices.push( geo.vertices[ face.b ].clone() );
                    vertices.push( geo.vertices[ face.c ].clone() );
                    vertices.push( geo.vertices[ face.c ].clone() );
                    vertices.push( geo.vertices[ face.d ].clone() );
                    vertices.push( geo.vertices[ face.d ].clone() );
                    vertices.push( geo.vertices[ face.a ].clone() );

            }

        }

        geometry.computeLineDistances();

        return geometry;

    }
    function render() {

        torusLine.rotation.x += guiControls.rotationX;
        torusLine.rotation.y += guiControls.rotationY;
        torusLine.rotation.z += guiControls.rotationZ;
		
		torusLine1.rotation.x += guiControls.rotationX;
        torusLine1.rotation.y += guiControls.rotationY;
        torusLine1.rotation.z += guiControls.rotationZ;

        
        if (( ani < 1)&&( ani > 0 )){
            ani += .0001;
            torusLine.material.dashSize = ani;
            guiControls.dashSize = ani;
        }
        else if (ani>1){
            ani *= -1;
            ani += .0001;
            torusLine.material.dashSize = ani*-1;
            guiControls.dashSize = ani*-1;      
        }
        else{
            ani += .0001;
            torusLine.material.dashSize = ani*-1;   
            guiControls.dashSize = ani*-1;  
        }
    }
    function animate(){
    
        console.log(ani);
        requestAnimationFrame(animate);
        render();
        stats.update();     
        renderer.render(scene, camera);
        
    
    }
    
    $(window).resize(function(){


        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;

        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();

        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );



    });
    init(); 
    animate();
    
}); 



