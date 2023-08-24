import { FunctionComponent } from 'react';
import {
  useMap as useMapkit,
} from 'react-mapkit';

const MapkitExample: FunctionComponent = () => {
  // ===========
  // Hooks
  // -----------
  const { map, mapProps, mapkit } = useMapkit();

  console.log({map, mapProps, mapkit});

  // ===========
  // Render
  // -----------
  return <>[MapkitExample Component]</>;
};

export default MapkitExample;