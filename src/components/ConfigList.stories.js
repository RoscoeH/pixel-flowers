import React from "react"
import ConfigItem from "./ConfigItem"
import ConfigList from "./ConfigList"

export default {
  title: "Components/ConfigList",
  component: ConfigList,
}

const Template = args => <ConfigList {...args} />

export const Default = Template.bind({})
Default.args = {
  children: [
    <ConfigItem.Boolean label="Enabled" value={true} />,
    <ConfigItem.List value="Daffofil" values={["Daffodil"]} />,
    <ConfigItem.Color label="Primary Color" value="#42a9cf" />,
    <ConfigItem.Color label="Secondary Color" value="#fc9dc3" />,
  ],
}
