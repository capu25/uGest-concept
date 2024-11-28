import React, { useEffect, useState } from 'react';
import MainContainer from './navigation/MainContainer';
import * as Font from 'expo-font';

export default function App() {

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'nunito': require('./assets/font/Nunito-Regular.ttf'),
          'nunito-bold': require('./assets/font/Nunito-Bold.ttf'),
          // aggiungi altri font se necessario
        });
        console.log('Font caricato con successo!');
      } catch (error) {
        console.error('Errore nel caricamento del font:', error);
      }
    }
    loadFonts();
  }, []);

  return (
    <MainContainer/>
  );
}