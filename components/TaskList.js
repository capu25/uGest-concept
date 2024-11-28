import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItem = ({ task, onOpenModal }) => {
  return (
    <View style={styles.taskItem}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      <TouchableOpacity onPress={() => onOpenModal(task)} style={styles.arrow}>
        <Icon name="chevron-right" size={24} style={styles.arrowText}/>
      </TouchableOpacity>
    </View>
  );
};

const TaskList = ({ onTaskCountUpdate }) => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Task 1", description: "Descrizione breve 1", completed: false },
    { id: "2", title: "Task 2", description: "Descrizione breve 2", completed: false },
    { id: "3", title: "Task 3", description: "Descrizione breve 3", completed: false },
    { id: "4", title: "Task 4", description: "Descrizione breve 4", completed: false },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Aggiorna il conteggio dei task ogni volta che tasks o completedTasks cambiano
  useEffect(() => {
    if (onTaskCountUpdate) {
      onTaskCountUpdate({
        total: tasks.length + completedTasks.length,
        completed: completedTasks.length
      });
    }
  }, [tasks, completedTasks]);

  const openModal = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTask(null);
  };

  const markAsCompleted = () => {
    if (selectedTask) {
      // Aggiungi il task completato all'array completedTasks
      setCompletedTasks(prev => [...prev, { ...selectedTask, completed: true }]);
      // Rimuovi il task dalla lista dei task attivi
      setTasks(prevTasks => prevTasks.filter(task => task.id !== selectedTask.id));
    }
    closeModal();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onOpenModal={openModal} />
        )}
        contentContainerStyle={styles.list}
      />

      {/* Modal per completare il task */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Completa il task: {selectedTask?.title}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedTask?.description}
            </Text>
            <View style={styles.modalButtons}>
              <Button title="Completa" onPress={markAsCompleted} />
              <Button title="Annulla" onPress={closeModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebebeb",
    height: "100%",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  arrow: {
    marginLeft: 10,
    padding: 5,
  },
  arrowText: {
    fontSize: 20,
    color: "#007AFF",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TaskList;
