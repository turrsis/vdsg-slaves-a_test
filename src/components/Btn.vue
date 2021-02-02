<template>
    <div id="Btn-path:/" xxxxxxxxxx="BtnQqW11asdsdd" v-designer.true="">
        <table border="1" cellpadding="5" width="100%">
            <tbody>
                <tr>
                    <td>
                        with tooltip
                    </td>
                    <td>
                        <v-tooltip bottom="">
                            <template v-slot:activator="{ on }">
                                <v-btn dark="" v-on="on">
                                    with tooltip
                                    <v-icon>
                                        mdi-numeric-5-box-multiple
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>tooltip for with tooltip</span>
                        </v-tooltip>
                    </td>
                </tr>
                <tr>
                    <td>
                        with tooltip no icon
                    </td>
                    <td>
                        <v-tooltip bottom="">
                            <template v-slot:activator="{ on }">
                                <v-btn dark="" v-on="on">
                                    with tooltip
                                </v-btn>
                            </template>
                            <span>tooltip for with tooltip</span>
                        </v-tooltip>
                    </td>
                </tr>
                <tr>
                    <td>
                        empty [href]
                    </td>
                    <td>
                        <v-btn href="/vuetify/Vuetify01" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        icon [href]
                    </td>
                    <td>
                        <v-btn href="/vuetify/Vuetify01" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px" @mouseenter="onBtnMouseEnter">
                            <v-icon>
                                mdi-numeric-0-box-multiple
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        empty [to]
                    </td>
                    <td>
                        <v-btn to="/vuetify/Vuetify01" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        icon [to]
                    </td>
                    <td>
                        <v-btn to="/vuetify/Vuetify01" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            <v-icon>
                                mdi-numeric-0-box-multiple
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            only text
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text in empty span
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            <span>
                            </span>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text in span
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            <span>only text in span</span>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text in div
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            <div>
                                only text in div
                            </div>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only icon
                    </td>
                    <td>
                        <v-btn icon="">
                            <v-icon>
                                mdi-numeric-1-box-multiple
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only empty icon
                    </td>
                    <td>
                        <v-btn>
                            <v-icon>
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        icon + text in span
                    </td>
                    <td>
                        <v-btn>
                            <v-icon>
                                mdi-numeric-3-box-multiple
                            </v-icon>
                            <span>icon + text</span>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        text + icon
                    </td>
                    <td>
                        <v-btn>
                            text + icon
                            <v-icon>
                                mdi-numeric-4-box-multiple
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        BINDINGS
                    </td>
                </tr>
                <tr>
                    <td>
                        binded text and rounded attribute
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" :rounded="isRounded" x-small="" height="50px">
                            {{ bindingText1 }}
                        </v-btn>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" :rounded="isRounded" x-small="" height="50px">
                            {{ bindingText1 }}
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            {{ bindingText1 }}
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text in span
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            <span>
                                {{ bindingText1 }}
                            </span>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text [prefix { bindingText1 } suffix]
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            prefix {{ bindingText1 }} suffix
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only text [prefix { bindingText1 } { bindingText2 } suffix]
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            prefix {{ bindingText1 }} {{ bindingText2 }} suffix
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        only icon
                    </td>
                    <td>
                        <v-btn icon="">
                            <v-icon>
                                {{ bindingIcon1 }}
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        text + icon
                    </td>
                    <td>
                        <v-btn>
                            {{ bindingText2 }}
                            <v-icon>
                                {{ bindingIcon2 }}
                            </v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td>
                        icon + text
                    </td>
                    <td>
                        <v-btn>
                            <v-icon>
                                {{ bindingIcon2 }}
                            </v-icon>
                            {{ bindingText2 }}
                        </v-btn>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        WITH INNER TEMPLATES
                    </td>
                </tr>
                <tr>
                    <td>
                        only text
                    </td>
                    <td>
                        <v-btn href="https://www.google.com/" hreflang="sgn-BE-FR" outlined="" x-small="" height="50px">
                            <template>
                                <span>text1</span>
                                <span>text2</span>
                            </template>
                            <template>
                                <v-icon>
                                    mdi-numeric-10-box-multiple
                                </v-icon>
                            </template>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isRounded: true,
            bindingText1: "==bindingText1==",
            bindingIcon1: "mdi-numeric-1-box-multiple",
            bindingText2: "==bindingText2==",
            bindingIcon2: "mdi-numeric-2-box-multiple"
        };
    },

    methods: {
        onBtnMouseEnter() {//console.log('Btn.vue->onBtnMouseEnter')
        }

    }
};
</script>
