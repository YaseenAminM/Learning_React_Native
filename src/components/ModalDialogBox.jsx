import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';

export default function ModalDialogBox() {
  const [modalVisible, setModelVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openBtn} onPress={() => setModelVisible(true)}>
        <Text style={styles.btnText}>Show Modal</Text>
      </TouchableOpacity>

      {/* ========================== */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModelVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Beautifull Modual</Text>
            <Text style={styles.modalText}>This is Beautiful Modal</Text>
            <TouchableOpacity onPress={() => setModelVisible(false)} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  openBtn: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    width: '80%',

    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  closeBtn: {
    backgroundColor: '#03dace',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 2,
  },

  closeBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
