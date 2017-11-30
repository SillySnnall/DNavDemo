/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    constructor() {
        super();
        this.state = {
            selectedTabBarItem: 'contacts'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabtitleStyle}>
                    <Text>Tab选项卡切换</Text>
                </View>
                <TabBarIOS
                    barTintColor='black'
                    tintColor='red'
                    style={styles.tabbariosStyle}
                >
                    {/*第一块*/}
                    <TabBarIOS.Item
                        // 任选一个
                        systemIcon='contacts'
                        title='战三'

                        selected={this.state.selectedTabBarItem === 'contacts'}
                        onPress={() => this.itemClick1()}
                    >
                        <View style={styles.tabitemStryle}>
                            <Text>第一页</Text>
                        </View>
                    </TabBarIOS.Item>
                    {/*第二块*/}
                    <TabBarIOS.Item
                        systemIcon='bookmarks'
                        selected={this.state.selectedTabBarItem === 'bookmarks'}
                        onPress={() => this.itemClick2()}
                    >
                        <View style={styles.tabitemStryle}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    {/*第三块*/}
                    <TabBarIOS.Item
                        systemIcon='downloads'
                        selected={this.state.selectedTabBarItem === 'downloads'}
                        onPress={() => this.itemClick3()}
                    >
                        <View style={styles.tabitemStryle}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    {/*第四块*/}
                    <TabBarIOS.Item
                        systemIcon='search'
                        selected={this.state.selectedTabBarItem === 'search'}
                        onPress={() => this.itemClick4()}
                    >
                        <View style={styles.tabitemStryle}>
                            <Text>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    }

    itemClick1() {
        this.setState({
            selectedTabBarItem: 'contacts'
        })
    }

    itemClick2() {
        this.setState({
            selectedTabBarItem: 'bookmarks'
        })
    }

    itemClick3() {
        this.setState({
            selectedTabBarItem: 'downloads'
        })
    }

    itemClick4() {
        this.setState({
            selectedTabBarItem: 'search'
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabbariosStyle: {},
    tabtitleStyle: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        height: 30
    },
    tabitemStryle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
