<template>
    <div id="SimpleTable-path:/" xxxxxxxxxx="SimpleTable" v-designer.true="">
        <v-simple-table dark="">
            <template v-slot:default="">
                <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Calories
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            td 0-0
                        </td>
                        <td>
                            td 0-1
                        </td>
                    </tr>
                    <tr>
                        <td>
                            td 1-0
                        </td>
                        <td>
                            td 1-1
                        </td>
                    </tr>
                    <tr>
                        <td>
                            td 2-0
                        </td>
                        <td>
                            td 2-1
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isAbsolute: false
        };
    }

};
</script>
