import React, { useEffect } from 'react';
//import { useComponent } from '@calendar/hooks';
import { useComponent } from '../hooks';
import { View } from 'react-native';
import { useStore } from '../store/index.js';

const MainView = ({ children, backgroundColor = '#FFFFFF', ...rest }) => {
  const init = useStore((store) => store.init);
  useEffect(() => {
    init();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor
      }}
      {...rest}
    >
      {children}
    </View>
  );
};

export default function AppView(props) {
  const SafeView = useComponent(MainView, props);
  return <SafeView />;
}
