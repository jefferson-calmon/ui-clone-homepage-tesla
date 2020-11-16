import React, { useCallback, useRef, useState } from 'react';

import ModelsContext, { CarModel } from '../../../contexts/ModelsContext';
import ModelOverlay from '../ModelOverlay';

import { Container, OverlayRoot } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [ registeredModels, setRegisteredModels ] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [ ...state,  model ]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(models => models.filter(model => (
      model.modelName !== modelName
    ) ));
  }, []);

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(model => model.modelName === modelName) || null;
  }, [registeredModels]);

  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName,
    }}>
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {
            registeredModels.map(model => (
              <ModelOverlay 
                key={model.modelName} 
                model={model}
              >
                {model.overlayNode}
              </ModelOverlay>
            ))
          }
        </OverlayRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
