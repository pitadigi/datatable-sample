import { LightningElement } from 'lwc';

/**
 * Datatableのカラム定義
 */
const columns = [
    { label: 'Action', type: 'button-icon', typeAttributes: { iconName: 'utility:add', title: 'アクション', name: 'action', }, },
    { label: 'Name', fieldName: 'name', type: 'text', },
    { label: 'Address', fieldName: 'address', type: 'text', },
    { label: 'Url', fieldName: 'url', type: 'url', },
];

/**
 * 表示するデータ
 * 通常は、Salesforceのオブジェクトからデータを取得するがサンプルでは固定で定義しておく
 */
const data = [
    {id: 1, name: '日本 太朗', address: '岩手県盛岡市', url: 'https://pitadigi.jp', },
    {id: 2, name: '岩手 次郎', address: '岩手県滝沢市', url: 'https://pitadigi.jp', },
];

export default class DatatableSample extends LightningElement {
    /**
     * 表示するデータ
     */
    data = data;

    /**
     * Datatableのカラム定義
     */
    columns = columns;

    /**
     * datatableのonrowactionから呼び出されるハンドラ
     * datatableのbutton、button-icon、actionがクリックされた場合、onrowactionで定義されたハンドラが呼び出される
     * 何がクリックされたかは、event.detail.actionを見て判断できる(カラム定義のtypeAttributesが設定される)
     * どの行がクリックされたかは、event.detail.rowを見て判断できる(dataで指定したデータが設定される)
     * 
     * 他のページに飛ぶのであれば、Javascriptでそのコードを書く
     * Salesforceのデータに変更を加える場合は、データを変更するApexクラスを作成し、Apexクラスを呼び出す
     * Apexクラスを呼び出す場合は、非同期なのでhandleActionを「async handleAction」とし、「await Apexクラス」と呼び出す
     * 
     * @param {*} event 
     */
    handleAction(event) {
        if (event.detail.action.name === 'action') {
            window.alert(`Action! -> id: ${event.detail.row.id}, name: ${event.detail.row.name}`);
        }
    }
}