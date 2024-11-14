import React, { useEffect } from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import api from './services/api';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ap',
});

export default ({ appContext, onAppContextChanged, history }) => {

  useEffect(() => {
    if(appContext.apiUrl != null) {

      onAppContextChanged(previousState => {
        return {
          ...previousState,
          api: api(appContext.apiUrl)
        }
      });
    }
  }, [appContext.apiUrl]);

  return (
    <StylesProvider generateClassName={generateClassName}>
    <div />
    </StylesProvider>
  );
};
