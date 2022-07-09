import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CurrentDate = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
    setDate(date);
  }, []);

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    dateContainer: {
        alignItems: 'center', 
        marginLeft: 80
    },
    dateText: {
        fontWeight: 'bold', 
        fontSize: 25, 
        color: '#010080'
    }
});

export default CurrentDate;