$path = "C:\Users\yamil\.gemini\antigravity-ide\scratch\Remapred\js\products.js"
$content = Get-Content $path -Raw -Encoding UTF8

$content = $content -replace 'id: "fotric-tp320a",\s*nombre: "([^"]+)",\s*gama: \{ es: "([^"]+)", en: "([^"]+)" \}', 'id: "fotric-tp320a",
    nombre: "$1",
    gama: { es: "Serie TP", en: "TP Series" }'

$content = $content -replace 'id: "fotric-tk5",\s*nombre: "([^"]+)",\s*(cssScale: "[^"]+",\s*)?gama: \{ es: "([^"]+)", en: "([^"]+)" \}', 'id: "fotric-tk5",
    nombre: "$1",
    $2gama: { es: "Serie TK", en: "TK Series" }'

$content = $content -replace 'id: "fotric-tk6",\s*nombre: "([^"]+)",\s*(cssScale: "[^"]+",\s*)?gama: \{ es: "([^"]+)", en: "([^"]+)" \}', 'id: "fotric-tk6",
    nombre: "$1",
    $2gama: { es: "Serie TK", en: "TK Series" }'

$content = $content -replace 'id: "fotric-tk7",\s*nombre: "([^"]+)",\s*(cssScale: "[^"]+",\s*)?gama: \{ es: "([^"]+)", en: "([^"]+)" \}', 'id: "fotric-tk7",
    nombre: "$1",
    $2gama: { es: "Serie TK", en: "TK Series" }'

$content = $content -replace 'id: "fotric-tk8",\s*nombre: "([^"]+)",\s*(cssScale: "[^"]+",\s*)?gama: \{ es: "([^"]+)", en: "([^"]+)" \}', 'id: "fotric-tk8",
    nombre: "$1",
    $2gama: { es: "Serie TK", en: "TK Series" }'

$content = $content -replace 'id: "fotric-v5",\s*nombre: "([^"]+)",\s*(cssScale: "[^"]+",\s*)?gama: \{ es: "([^"]+)", en: "([^"]+)" \}', 'id: "fotric-v5",
    nombre: "$1",
    $2gama: { es: "Serie V", en: "V Series" }'

$content = $content -replace 'id: "fotric-v7",\s*nombre: "([^"]+)",\s*(cssScale: "[^"]+",\s*)?gama: \{ es: "([^"]+)", en: "([^"]+)" \}', 'id: "fotric-v7",
    nombre: "$1",
    $2gama: { es: "Serie V", en: "V Series" }'

[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Output "Done"
