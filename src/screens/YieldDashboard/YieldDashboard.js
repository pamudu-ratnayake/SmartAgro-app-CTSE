import React from 'react';
import { View, StyleSheet  } from 'react-native';

import { WebView } from 'react-native-webview';

const HTML = `
<!DOCTYPE html>
<html>
<head>
    <title>ChartJS - Line</title>
    
    <link href="css/default.css" rel="stylesheet">
    
</head>
<body>

	<div class="chart-container">
		<canvas id="line-chartcanvas"></canvas>
	</div>

	<!-- javascript -->
    <script src="js/jquery.min.js"></script>
    <script src="js/Chart.min.js"></script>

    <script src="js/line-db-php.js"></script>
    
</body>
</html>
`;

export default function YieldDashboard() {
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: HTML }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
});