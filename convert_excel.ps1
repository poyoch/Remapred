$excel = New-Object -ComObject Excel.Application
$excel.DisplayAlerts = $false
$workbook = $excel.Workbooks.Open("$(Get-Location)\productos\camaras_termograficas_fotric.xlsx")

foreach ($sheet in $workbook.Sheets) {
    $csvPath = "$(Get-Location)\productos\" + $sheet.Name + ".csv"
    $sheet.SaveAs($csvPath, 62) # 62 is xlCSVUTF8
}

$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel)
