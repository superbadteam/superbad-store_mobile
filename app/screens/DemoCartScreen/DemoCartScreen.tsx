import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {Text} from "../../components/Text";
import CartItem from "../../components/CartItem/CartItem";
import { colors } from "../../theme/colors";
import { clothItems } from "../../data/data";
import {Button} from "../../components/Button";
import Screen from "app/components/Screen/Screen";

const MyCart: React.FC = () => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title} text={"My Cart"} />
        {clothItems.slice(0, 7).map((item) => (
          <CartItem key={item.title} item={item} />
        ))}
        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Text text={"Total Price"} style={styles.textMedium} />
            <View style={styles.textContainer}>
              <Text text={"$3000"} style={styles.textMedium} />
            </View>
          </View>
          <View style={styles.summaryItem}>
            <Text text={"Discount"} style={styles.textMedium} />
            <View style={styles.textContainer}>
              <Text text={"$5"} style={styles.textMedium} />
            </View>
          </View>
          <View style={styles.summaryItem}>
            <Text text={"Delivery fee"} style={styles.textMedium} />
            <View style={styles.textContainer}>
              <Text text={"$2"} style={styles.textMedium} />
            </View>
          </View>
        </View>
        
        <View style={styles.totalContainer}>
           <Text  text={"Total"} style={styles.textTotal} />
           <View style={styles.totalAmountContainer}>
             <Text preset="bold" text={"$2997"} style={styles.textTotal} />
             <Button
               text={"Checkout"}
               style={styles.button}
               textStyle={styles.buttonLabel}
             />
         </View>
       </View>


        
      </ScrollView>
    </Screen>
      
  );
};

export default MyCart;

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontFamily: "Lato-Black",
    color: colors.text,
    fontSize: 20,
    paddingVertical: 15,

  },
  summaryCard: {
    marginHorizontal: 10,
    width: "100%",
    alignSelf: "center",
    borderBottomColor: colors.border,
    borderBottomWidth: 0.5,
  },
  summaryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  textContainer: {
    width: "15%",
  },
  textTotal : {
    marginTop : 10,
    marginLeft: 60,
  },
  textMedium: {
    color: colors.text,
    textAlign: "left",
  },
  button: {
    width: "45%",
    alignSelf : "flex-end",
    backgroundColor: colors.palette.blue,
    marginRight : 20,
  },
  buttonLabel: {
    textAlign: "center",
    color : colors.background,
  },
  totalContainer: {
    marginTop: 0,
    marginHorizontal: 10,
  },
  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom : 20,
  },
  
  
});
