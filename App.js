import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text style={styles.locationText}>Ubicación Actual</Text>
        </View>

        <Image
          source={{
            uri:"https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/a645f9d359fa8818a917ee6fee4544c4.jpg"
          }}
          style={styles.sushiImage}
        />

        <SectionHeader title="All Restaurants" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </ScrollView>

        <SectionHeader title="All Groceries" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          <GroceriesCard />
          <GroceriesCard />
          <GroceriesCard />
        </ScrollView>

        <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalScroll}
 
         >

        <Image
          source={require('./food.png')} 
          style={styles.food}
          
      
    />

    <Image
          source={require('./food.png')} 
          style={styles.food}    
    />
  

        </ScrollView>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.seeAllText}>See All</Text>
  </View>
);

const FoodCard = () => (
  <View style={styles.foodCard}>
    <Image
      source={{ uri: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/a645f9d359fa8818a917ee6fee4544c4.jpg' }}
      style={styles.foodImage}
    />
    <View >
   
      <View style={styles.foodRating}>
      <Text style={styles.foodTitle}>Restaurants</Text>
        <MaterialIcons name="star" size={20} color="#C0C0C0" />
        <Text style={styles.ratingText}>4.7</Text>
      </View>
      <View style={styles.foodRating}>
        <Text style={styles.foodTags}>Sushi</Text>
        <Text style={styles.foodTags}>              15-20 min</Text>
      </View>

    </View>
  </View>
);



const GroceriesCard = () => (
  <View style={styles.foodCard}>
    <Image
      source={{ uri: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/a645f9d359fa8818a917ee6fee4544c4.jpg' }}
      style={styles.foodImage}
    />
    <View >
   
      <View style={styles.foodRating}>
      <Text style={styles.foodTitle}>Groceries</Text>
        <MaterialIcons name="star" size={20} color="#C0C0C0" />
        <Text style={styles.ratingText}>4.7</Text>
      </View>
   
        <Text style={styles.foodTags}>15-20 min</Text>
 

    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
  sushiImage: {
    width: '100%',
    height: 150,
    borderRadius: 30,
    marginBottom: 20,
  },



  food: {
    src:"./food.png",
    width: 355,
    height: 180,
    borderRadius: 30,
    marginBottom: 20,
    marginHorizontal:10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    color: 'lightgray',
  },
  horizontalScroll: {
    paddingVertical: 10,
  },
  foodCard: {
    width: 150,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
  },
  foodImage: {
    width: 130,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },

  foodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
  },
  foodTags: {
    color: '#888',
    fontSize: 12,
  },

  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal:20,
  },
});
