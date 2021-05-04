import React from 'react'
import { StyleSheet, Text, View ,StatusBar,SafeAreaView,ScrollView} from 'react-native'

const AboutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.header}>
                About :
            </Text>
          <Text style={styles.text}>
          HealthPlotter provides self-insured companies a data-driven cloud based solution that works collaboratively within their existing health benefits ecosystem. Our single-source platform provides employers and their wellness stakeholders actionable data for improved population health management, risk stratification and cost control.

Today, with

health costs continuing to rise, over ½ of self-insured companies utilize a combination of onsite practitioners (work-site clinics) along with a menu of wellness initiatives based on non-actionable data. With our approach, we power employers, their onsite practitioners and wellness programs through our solution a tactical and strategic plan to address the specific health needs of your population, target modifiable risks and drive tangible high-impact measurable results and outcomes - lower costs.
          </Text>

          <Text style={styles.header}>
            Founder :
          </Text>
          <Text style={styles.text}>
            Senthil Premraj
          </Text>

          <Text style={styles.header}>
            Founded Date :
          </Text>
          <Text style={styles.text}>
            2013
          </Text>

          <Text style={styles.header}>
            Contact Email :
          </Text>
          <Text style={styles.text}>
            senthil@healthplotter.com
          </Text>

          <Text style={styles.header}>
            Website :
          </Text>
          <Text style={styles.text}>
            healthplotter.com
          </Text>

          <Text style={styles.header}>
            Phone Number :
          </Text>
          <Text style={styles.text}>
            317-603-5629
          </Text>

        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    header: {
        fontSize:25,
        fontWeight:'bold',
        marginBottom:10,
        marginTop: 10
    },
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'black',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 15,
      fontWeight:'bold'
    },
  });

export default AboutScreen


