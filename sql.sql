// Query
// 1. Total Amount Transaksi SV0003
SELECT SUM(Amount) total_amount FROM `tbl_transaksiATM` WHERE Terminal='SV0003';
// 2. Total Amount Bank C
SELECT SUM(Amount) total_amount FROM `tbl_transaksiATM` tt INNER JOIN tbl_issuer ti ON ti.Prefix = SUBSTRING(tt.`Nomor Kartu`, 1, 4) WHERE ti.`Bank` = 'C';
// 3. Report
SELECT tr.Merek Merek, COUNT(tt.Terminal) `Jumlah Transaksi`, SUM(tt.Amount) `Total Amount` FROM `tbl_transaksiATM` tt INNER JOIN tb_terminalATM tr ON tt.Terminal=tr.`Nomor Terminal` GROUP BY tr.Merek;

