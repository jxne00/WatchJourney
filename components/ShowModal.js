import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from '../constants/constants';
import modalStyles from './styles/ModalStyles';
import { addShowToAsync } from '../data/AsyncActions';

/**
 * @description Modal to add a show to a watchlist.
 * @param modalVisible - state for modal's visibility
 * @param setModalVisible - state for setting modal visibility
 * @param type - 'movie' or 'tv
 * @param show_id - id of show to add to watchlist
 */
const WatchlistModal = ({
  modalVisible,
  setModalVisible,
  type,
  show_id,
  showName,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalView}>
          {/* show only up to 17 chars of name */}
          <Text style={modalStyles.modalTitle}>"{showName}"</Text>

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
