import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image } from 'react-native';
import CameraComponent from './CameraComponent';

const InventoryComponent = () => {
  const [inventory, setInventory] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  const handlePictureTaken = (uri) => {
    setInventory([...inventory, { id: Date.now(), imageUri: uri }]);
    setShowCamera(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {showCamera ? (
        <CameraComponent onPictureTaken={handlePictureTaken} />
      ) : (
        <>
          <FlatList
            data={inventory}
            renderItem={({ item }) => (
              <View style={{ padding: 10 }}>
                <Image source={{ uri: item.imageUri }} style={{ width: 100, height: 100 }} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <Button title="Add Item" onPress={() => setShowCamera(true)} />
        </>
      )}
    </View>
  );
};

// const InventoryComponent = () => {
//   const [inventory, setInventory] = useState([]);
//   const [showCamera, setShowCamera] = useState(false);

//   const handlePictureTaken = (uri) => {
//     setInventory([...inventory, { id: Date.now(), imageUri: uri }]);
//     setShowCamera(false);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {showCamera ? (
//         <CameraComponent onPictureTaken={handlePictureTaken} />
//       ) : (
//         <>
//           <FlatList
//             data={inventory}
//             renderItem={({ item }) => (
//               <View style={{ padding: 10 }}>
//                 <Image source={{ uri: item.imageUri }} style={{ width: 100, height: 100 }} />
//               </View>
//             )}
//             keyExtractor={(item) => item.id.toString()}
//           />
//           <Button title="Add Item" onPress={() => setShowCamera(true)} />
//         </>
//       )}
//     </View>
//   );
// };


export default InventoryComponent;
