import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Education from './education/Education';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import k1 from './assets/images/kosmonavt.png';
import k2 from './assets/images/kosmonavt2.png';
import k3 from './assets/images/kosmonavt3.png';
import k4 from './assets/images/kosmonavt4.png';
import k5 from './assets/images/kosmonavt5.png';
import k6 from './assets/images/kosmonavt6.png';
import k7 from './assets/images/kosmonavt7.png';
import k8 from './assets/images/kosmonavt8.png';


function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: true
              },
              fpsLimit: 60,
              particles: {
                groups: {
                  z5000: {
                    number: {
                      value: 70
                    },
                    zIndex: {
                      value: 5000
                    }
                  },
                  z7500: {
                    number: {
                      value: 30
                    },
                    zIndex: {
                      value: 75
                    }
                  },
                  z2500: {
                    number: {
                      value: 50
                    },
                    zIndex: {
                      value: 25
                    }
                  },
                  z1000: {
                    number: {
                      value: 40
                    },
                    zIndex: {
                      value: 10
                    }
                  }
                },
                number: {
                  value: 200,
                  density: {
                    enable: false,
                    value_area: 800
                  }
                },
                color: {
                  value: "#262626",
                  animation: {
                    enable: false,
                    speed: 20,
                    sync: true
                  }
                },
                shape: {
                  type: "circle"
                },
                opacity: {
                  value: 0.8,
                  random: false,
                  animation: {
                    enable: false,
                    speed: 3,
                    minimumValue: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 2
                },
                links: {
                  enable: false,
                  distance: 100,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  angle: {
                    value: 10,
                    offset: 0
                  },
                  enable: true,
                  speed: 5,
                  direction: "right",
                  random: false,
                  straight: true,
                  outModes: {
                    default: "out"
                  },
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                },
                zIndex: {
                  value: 5,
                  opacityRate: 0.5
                }
              },
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onHover: {
                    enable: false,
                    mode: "repulse"
                  },
                  onClick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    links: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                  },
                  repulse: {
                    distance: 200
                  },
                  push: {
                    quantity: 4,
                    groups: ["z5000", "z7500", "z2500", "z1000"]
                  },
                  remove: {
                    quantity: 2
                  }
                }
              },
              detectRetina: true,
              background: {
                color: "#f0ebe3",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
              },
              emitters: {
                position: {
                  y: 55,
                  x: -30
                },
                rate: {
                  delay: 7,
                  quantity: 1
                },
                size: {
                  width: 0,
                  height: 0
                },
                particles: {
                  shape: {
                    type: "images",
                    options: {
                      images: [
                        {
                          src: `${k1}`,
                          width: 205,
                          height: 267
                        },
                        {
                          src: `${k2}`,
                          width: 207,
                          height: 265
                        },
                        {
                          src: `${k3}`,
                          width: 204,
                          height: 266
                        },
                        {
                          src: `${k4}`,
                          width: 206,
                          height: 267
                        },
                        {
                          src: `${k5}`,
                          width: 205,
                          height: 265
                        },
                        {
                          src: `${k6}`,
                          width: 205,
                          height: 265
                        },
                        {
                          src: `${k7}`,
                          width: 204,
                          height: 267
                        },
                        {
                          src: `${k8}`,
                          width: 205,
                          height: 267
                        }
                      ]
                    }
                  },
                  size: {
                    value: 40
                  },
                  move: {
                    speed: 10,
                    outModes: {
                      default: "destroy",
                      left: "none"
                    },
                    straight: true
                  },
                  zIndex: {
                    value: 0
                  },
                  rotate: {
                    value: {
                      min: 0,
                      max: 360
                    },
                    animation: {
                      enable: true,
                      speed: 10,
                      sync: true
                    }
                  }
                }
              }
            }}
        />
      <Skills />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
