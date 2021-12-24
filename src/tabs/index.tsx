import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
  } from '@ionic/react'
import { Route } from 'react-router'
import HomeTabPage from './home'

const MainTabs = () => {

  return (
    <IonTabs>
      <IonRouterOutlet id="tabs">
        <Route exact path="/tabs/tab1" component={HomeTabPage} />
        <Route exact path="/tabs/tab2" component={HomeTabPage} />
        <Route exact path="/tabs/tab3" component={HomeTabPage} />
        <Route exact path="/tabs/tab4" component={HomeTabPage} />
        <Route exact path="/tabs/tab5" component={HomeTabPage} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" onIonTabsDidChange={(e) => console.log(e)}>
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon='assets/tab/tab1.svg' style={{ fontSize: '22px' }} />
          <IonLabel>首页</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon="assets/tab/tab1.png" size="small" />
          <IonLabel>消息</IonLabel>
          {/* {
            bulletin > 0 &&
            <IonBadge color="danger">{bulletin}</IonBadge>
          } */}
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon="assets/tab/tab1.png" size="small" />
          <IonLabel>项目</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab4" href="/tabs/tab4">
          <IonIcon icon="assets/tab/tab1.png" size="small" />
          <IonLabel>工作台</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab5" href="/tabs/tab5">
          <IonIcon icon="assets/tab/tab1.png" size="small" />
          <IonLabel>我的</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  )
}

export default MainTabs