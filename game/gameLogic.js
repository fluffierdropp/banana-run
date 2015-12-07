A3D.config = {
  game:{
    forceResolution: true,
    targetRes : [640,480],
    startScene : 'first_level'
  },
  scenes : {
    first_level : {
      rootUrl : './scenes/',
      file : 'platformer.babylon'
    }
  },

      lives: 3,
      speed : 1,
      jumpButton : 32,
      leftButton : 65,
      rightButton : 68,
      gravity : -0.5,

      actionButton: 'leftmouse',
      playerSettings : {
        meshName: 'bawana',
        rootUrl: '/models/',
        file:'bannana_with_bones.babylon',
        spawnPoint : 'InitialSpawn',
        jumpForce : 4,
        jumpAccel : 2,
        animationsSetup : [
          {
            name : 'walk',
            start : 0,
            end : 20,
            options : {
              ratio: 2.4
            }
          },
          {
            name : 'idle',
            start:80,
            end : 83,
            options : {
              loop : true,
              ratio : .2
            }
          },
          {
            name : 'hit',
            start:110,
            end : 120,
            options : {
              loop : true,
              ratio : .2
            }
          },
          {
            name : 'jump',
            start : 80,
            end : 100,
            options : {
              ratio : 2,
              loop : false
            }
          }
        ],
        rotationValues : {
          left : 1.5,
          right : -1.5
        },

        scale : {
          x: 1,
          y: 1,
          z : 1
        },
        boundsOffset : {
          z : -2,
          x : -2,
          y: 13
        }

      },
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 30,
          y : 20,
          z : -40
        },
        rotation : {
          x: .3,
          y: -.3,
          z: 0
        }
      }

};

function start(){
  new A3D.Game();
}

document.addEventListener( "DOMContentLoaded", start, false );
