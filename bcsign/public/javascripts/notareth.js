/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Document = new Array();

setInterval(function () {
    console.log('Geth' + (web3.isConnected() ? " is " : " is not ") + 'connected.');
    console.log('Balance: ' + web3.fromWei(web3.eth.getBalance(web3.eth.coinbase).toString()));
}, 5000);

transactions = function () {
    notaryContract.DocumentEvent({}, {fromBlock: 0, toBlock: "latest"}).watch(function (a, b) {

        var hash = web3.toAscii(b.args.hash);

        for (var i = 0; i < Document.length; i++)
        {
            if (Document[i].hash == hash && to == b.args.to)
            {
                doc = Document[i];
            }
        }

        //var doc = Document.findOne({hash: hash, to: b.args.to});

        if (doc === undefined) {
            Document.push({hash: hash, to: b.args.to, from: b.args.from, blockNumber: b.args.blockNumber.toString()})
        }
    })

    return Document;
}
