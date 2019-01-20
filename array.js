var Nama=[];
		var Jml=[];
		var Tot=[];
		var total = new Array();
		indeks = 0;
		var omzet = 0;
			
			//onclick subTotal()
			function subTotal()
			{
			//deklarasi variable-nya
				var namabarang = document.getElementById("inpjenis").value;
				var jmlah = document.getElementById("jumlah").value;
				var kategori = document.getElementById("inpkategori").value;
				var kate;
				var jenis;
				
			//harga jenis
				if(namabarang =="Kaos")
				{
					jenis = 3000;
				}
				else if(namabarang =="Celana")
				{
					jenis = 2000;
				}
				else if(namabarang =="Jaket")
				{
					jenis = 3000;
				}
				else if(namabarang =="JaketJeans")
				{
					jenis = 5000;
				}
				else if(namabarang =="CelanaJeans")
				{
					jenis = 5000;
				}
				else if(namabarang =="Selimut")
				{
					jenis = 12000;
				}
				else 
				{
					jenis = 0;
				}
				
			//harga kategori
				if (kategori == "reguler")
				{
				 kate = 2000;
				}
				else if (kategori == "kilat")
				{
				 kate = 5000;
				}
				else
				{
				 kate = 0;
				}
				
			//subTotal
				subT = parseInt(jenis*jmlah);
				
			//hitung total harganya
				total[indeks] = parseInt(subT) + parseInt(kate)
										
				//ambil datanya dari var namabarang,jmlah,totl[indeks] dan masukkan dalam tabel
					Nama.push(namabarang);
					Jml.push(jmlah);
					Tot.push(total[indeks]);
				//var tabel - proses munculnya isi tabel
					var isiTbl1 = "";
					var isiTbl2 = "";
					var isiTbl3 = "";
				for(var i = 0; i < Nama.length; i++)
				{
					isiTbl1 += Nama[i]+"<br>";
					isiTbl2 += Jml[i]+"<br>";
					isiTbl3 += Tot[i]+"<br>";
				}
				//tabel yang dituju
					document.getElementById("tbLdry").innerHTML = isiTbl1;
					document.getElementById("tbJum").innerHTML = isiTbl2;
					document.getElementById("tbTot").innerHTML = isiTbl3;
					
				//prosesi munculnya total harga ke tabel total
					var i;
					ttl = 0;
					for(i=0; i<Tot[i]; i++)
					{
						ttl = parseInt(ttl) + parseInt(Tot[i]);
					}
				//muncul ke lbltotal
					document.getElementById("lbltotal").innerHTML = ttl;
					
		//untuk omzet function omzett()
			omzett()	
			}
		//hitung omzet	
			function omzett()
			{
				omzet = parseInt(omzet) + parseInt(total[indeks]);
				document.getElementById("lblomset").value = omzet;
			}
			
		//hitung kembalian
			function kembalian()
			{
			//totalnya
				var tot = document.getElementById("lbltotal").innerHTML;
			//bayarnya
				var bayar = document.getElementById("inpbayar").value;
			//hitung deh
				var kembalian = parseInt(bayar) - parseInt(tot);
			//output
				document.getElementById("lblkembali").innerHTML = kembalian;
			}
		
		// transaksi selanjutnya
			function UlangTransaksi()
			{
				Nama.length = 0;
				Jml.length = 0;
				Tot.length = 0;
				
				var i;
				var hapus ="";
				for (i = 0; i < Tot.length; i++)
				{
					hapus = "" + Tot[i] + "";
				}
				
				document.getElementById("inpjenis").value = hapus;
				document.getElementById("jumlah").value = hapus;
				document.getElementById("inpkategori").value = hapus;
				document.getElementById("tbLdry").innerHTML = hapus;
				document.getElementById("tbJum").innerHTML = hapus;
				document.getElementById("tbTot").innerHTML = hapus;
				document.getElementById("inpbayar").value = hapus;
				document.getElementById("lblkembali").innerHTML = hapus;
				document.getElementById("lbltotal").innerHTML = hapus;
			}