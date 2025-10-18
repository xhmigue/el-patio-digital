#!/bin/bash

# Carpeta actual (puedes cambiarla si quieres)
cd "$(dirname "$0")"

# Contador inicial
count=1

# Recorre todos los archivos de imagen (ajusta la extensión si no es .webp)
for file in *.webp *.jpg *.png *.tif; do
  # Solo si existe el archivo
  [ -e "$file" ] || continue
  
  # Extrae la extensión original (por si hay mezcla)
  ext="${file##*.}"

  # Renombra con número consecutivo y misma extensión
  mv "$file" "${count}.${ext}"

  # Incrementa contador
  ((count++))
done

echo "✅ Renombradas $((count-1)) imágenes correctamente."
