import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

import styles from './footer.style';
import { icons } from '../../../constants';

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} activeOpacity={0.7}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        activeOpacity={0.8}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;