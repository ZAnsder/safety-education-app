import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
  } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import '@ionic/react/css/core.css'
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/typography.css'
import { ellipse, square, triangle } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'
import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'
import MainTabs from './tabs'
import './theme/variables.css'

/* Core CSS required for Ionic components to work properly */

/* Basic CSS for apps built with Ionic */

/* Optional CSS utils that can be commented out */

/* Theme variables */

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        {/* <Route exact path="/" render={() => <HomeOrTutorial />} /> */}
        <Redirect to='/tabs/tab1' />
      </IonRouterOutlet>
      <Route path="/tabs" render={() => <MainTabs />} />
    </IonReactRouter>
  </IonApp>
);

export default App;
