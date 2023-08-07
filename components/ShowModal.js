import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from '../constants/constants';
import modalStyles from './styles/ModalStyles';
import { addShowToAsync } from './AsyncActions';

const WatchlistModal = ({ modalVisible, setModalVisible, type, show_id }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalView}>
          {type === 'movie' ? (
            <Text style={modalStyles.modalText}>Add to movie watchlist:</Text>
          ) : (
            <Text style={modalStyles.modalText}>Add to TV watchlist:</Text>
          )}

          {/* render a button for each watchlist */}
          {Constants.WATCHLISTS.map((watchList, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                addShowToAsync(watchList, type, show_id, setModalVisible)
              }
              style={modalStyles.modalBtnStyle}>
              <Text style={modalStyles.modelBtnText}>{watchList}</Text>
            </TouchableOpacity>
          ))}

          {/* close modal when cancel pressed */}
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}>
            <MaterialIcons
              name="cancel"
              size={30}
              style={modalStyles.modalCancelIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default WatchlistModal;
