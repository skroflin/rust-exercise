searchState.loadedDescShard("zerocopy", 0, "<em>Need more out of zerocopy? Submit a customer request issue!</em>\nTypes for which any bit pattern is valid.\nTypes for which a sequence of bytes all set to zero …\nTypes which are free from interior mutability.\nTypes that can be converted to an immutable slice of …\nIndicates that zerocopy can reason about certain aspects …\nThe type of metadata stored in a pointer to <code>Self</code>.\nA typed reference derived from a byte slice.\nTypes for which some bit patterns are valid.\nA type with no alignment requirement.\nTypes with no alignment requirement.\nGets the bytes of this value.\nGets the bytes of this value mutably.\nTraits for types that encapsulate a <code>[u8]</code>.\nByte order-aware numeric primitives.\nGets the underlying bytes.\nGets the underlying bytes mutably.\nReturns a mutable reference to the wrapped <code>T</code> without …\nReturns a reference to the wrapped <code>T</code> without checking …\nTypes related to error reporting.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a <code>Ref</code> from a byte slice.\nConstructs a <code>Ref</code> from the given bytes with DST length …\nConstructs a <code>Ref</code> from the prefix of a byte slice.\nConstructs a <code>Ref</code> from the prefix of the given bytes with …\nConstructs a <code>Ref</code> from the suffix of a byte slice.\nConstructs a <code>Ref</code> from the suffix of the given bytes with …\nGets a copy of the inner <code>T</code>.\nGets an unaligned mutable raw pointer to the inner <code>T</code>.\nGets an unaligned raw pointer to the inner <code>T</code>.\nIncludes a file and safely transmutes it to a value of an …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes <code>self</code>, returning the inner <code>T</code>.\nConverts this <code>Ref</code> into a mutable reference.\nConverts this <code>Ref</code> into a reference.\nInterprets the given <code>source</code> as a <code>&amp;mut Self</code>.\nInterprets the given <code>source</code> as a <code>&amp;mut Self</code> with a DST …\nInterprets the prefix of the given <code>source</code> as a <code>&amp;mut Self</code> …\nInterprets the prefix of the given <code>source</code> as a <code>&amp;mut Self</code> …\nInterprets the suffix of the given <code>source</code> as a <code>&amp;mut Self</code> …\nInterprets the suffix of the given <code>source</code> as a <code>&amp;mut Self</code> …\nConstructs a new <code>Unalign</code>.\nCreates an instance of <code>Self</code> from zeroed bytes.\nReads a copy of <code>T</code>.\nReads a copy of <code>Self</code> from the given <code>source</code>.\nReads a copy of <code>Self</code> from the prefix of the given <code>source</code>.\nReads a copy of <code>Self</code> from the suffix of the given <code>source</code>.\nInterprets the given <code>source</code> as a <code>&amp;Self</code>.\nInterprets the given <code>source</code> as a <code>&amp;Self</code> with a DST length …\nInterprets the prefix of the given <code>source</code> as a <code>&amp;Self</code> …\nInterprets the prefix of the given <code>source</code> as a DST <code>&amp;Self</code> …\nInterprets the suffix of the given bytes as a <code>&amp;Self</code>.\nInterprets the suffix of the given <code>source</code> as a DST <code>&amp;Self</code> …\nSets the inner <code>T</code>, dropping the previous value.\nSafely transmutes a value of one type to a value of …\nSafely transmutes a mutable reference of one type to a …\nSafely transmutes a mutable or immutable reference of one …\nAttempts to return a reference to the wrapped <code>T</code>, failing …\nAttempts to return a mutable reference to the wrapped <code>T</code>, …\nAttempts to interpret the given <code>source</code> as a <code>&amp;mut Self</code> …\nAttempts to interpret the given <code>source</code> as a <code>&amp;mut Self</code> with …\nAttempts to interpret the prefix of the given <code>source</code> as a …\nAttempts to interpret the prefix of the given <code>source</code> as a …\nAttempts to interpret the suffix of the given <code>source</code> as a …\nAttempts to interpret the suffix of the given <code>source</code> as a …\nAttempts to read the given <code>source</code> as a <code>Self</code>.\nAttempts to read a <code>Self</code> from the prefix of the given <code>source</code>…\nAttempts to read a <code>Self</code> from the suffix of the given <code>source</code>…\nAttempts to interpret the given <code>source</code> as a <code>&amp;Self</code>.\nAttempts to interpret the given <code>source</code> as a <code>&amp;Self</code> with a …\nAttempts to interpret the prefix of the given <code>source</code> as a …\nAttempts to interpret the prefix of the given <code>source</code> as a …\nAttempts to interpret the suffix of the given <code>source</code> as a …\nAttempts to interpret the suffix of the given <code>source</code> as a …\nConditionally transmutes a value of one type to a value of …\nConditionally transmutes a mutable reference of one type …\nConditionally transmutes a mutable or immutable reference …\nUpdates the inner <code>T</code> by calling a function on it.\nWrites the bytes of <code>t</code> and then forgets <code>t</code>.\nWrites a copy of <code>self</code> to <code>dst</code>.\nWrites a copy of <code>self</code> to the prefix of <code>dst</code>.\nWrites a copy of <code>self</code> to the suffix of <code>dst</code>.\nOverwrites <code>self</code> with zeros.\nA mutable or immutable reference to a byte slice.\nA mutable reference to a byte slice.\nA <code>ByteSlice</code> which can be cloned without violating …\nA <code>ByteSlice</code> which can be copied without violating …\nA <code>ByteSlice</code> that conveys no ownership, and so can be …\nA <code>ByteSliceMut</code> that conveys no ownership, and so can be …\nA <code>ByteSlice</code> that can be split in two.\nA shorthand for <code>SplitByteSlice</code> and <code>ByteSliceMut</code>.\nCoverts <code>self</code> into a <code>&amp;[u8]</code>.\nCoverts <code>self</code> into a <code>&amp;mut [u8]</code>.\nAttempts to split <code>self</code> at the midpoint.\nSplits the slice at the midpoint, possibly omitting bounds …\nA type alias for <code>BigEndian</code>.\nBig-endian byte order.\nA type-level representation of byte order.\nA 32-bit floating point number stored in a given byte …\nA 64-bit floating point number stored in a given byte …\nA 128-bit signed integer stored in a given byte order.\nA 16-bit signed integer stored in a given byte order.\nA 32-bit signed integer stored in a given byte order.\nA 64-bit signed integer stored in a given byte order.\nA word-sized signed integer stored in a given byte order.\nA type alias for <code>LittleEndian</code>.\nLittle-endian byte order.\nThe maximum value.\nThe maximum value.\nThe maximum value.\nThe maximum value.\nThe maximum value.\nThe endianness used by this platform.\nThe endianness used in many network protocols.\nA 128-bit unsigned integer stored in a given byte order.\nA 16-bit unsigned integer stored in a given byte order.\nA 32-bit unsigned integer stored in a given byte order.\nA 64-bit unsigned integer stored in a given byte order.\nA word-sized unsigned integer stored in a given byte order.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nNumeric primitives stored in big-endian byte order.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNumeric primitives stored in little-endian byte order.\nNumeric primitives stored in native-endian byte order.\nNumeric primitives stored in network-endian byte order.\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nA 32-bit floating point number stored in big-endian byte …\nA 64-bit floating point number stored in big-endian byte …\nA 128-bit signed integer stored in big-endian byte order.\nA 16-bit signed integer stored in big-endian byte order.\nA 32-bit signed integer stored in big-endian byte order.\nA 64-bit signed integer stored in big-endian byte order.\nA 128-bit unsigned integer stored in big-endian byte order.\nA 16-bit unsigned integer stored in big-endian byte order.\nA 32-bit unsigned integer stored in big-endian byte order.\nA 64-bit unsigned integer stored in big-endian byte order.\nA 32-bit floating point number stored in little-endian …\nA 64-bit floating point number stored in little-endian …\nA 128-bit signed integer stored in little-endian byte …\nA 16-bit signed integer stored in little-endian byte order.\nA 32-bit signed integer stored in little-endian byte order.\nA 64-bit signed integer stored in little-endian byte order.\nA 128-bit unsigned integer stored in little-endian byte …\nA 16-bit unsigned integer stored in little-endian byte …\nA 32-bit unsigned integer stored in little-endian byte …\nA 64-bit unsigned integer stored in little-endian byte …\nA 32-bit floating point number stored in native-endian …\nA 64-bit floating point number stored in native-endian …\nA 128-bit signed integer stored in native-endian byte …\nA 16-bit signed integer stored in native-endian byte order.\nA 32-bit signed integer stored in native-endian byte order.\nA 64-bit signed integer stored in native-endian byte order.\nA 128-bit unsigned integer stored in native-endian byte …\nA 16-bit unsigned integer stored in native-endian byte …\nA 32-bit unsigned integer stored in native-endian byte …\nA 64-bit unsigned integer stored in native-endian byte …\nA 32-bit floating point number stored in network-endian …\nA 64-bit floating point number stored in network-endian …\nA 128-bit signed integer stored in network-endian byte …\nA 16-bit signed integer stored in network-endian byte …\nA 32-bit signed integer stored in network-endian byte …\nA 64-bit signed integer stored in network-endian byte …\nA 128-bit unsigned integer stored in network-endian byte …\nA 16-bit unsigned integer stored in network-endian byte …\nA 32-bit unsigned integer stored in network-endian byte …\nA 64-bit unsigned integer stored in network-endian byte …\nThe error type of well-aligned, fallible casts.\nThe conversion source was improperly aligned.\nThe conversion source was improperly aligned.\nThe conversion source was improperly aligned.\nThe conversion source was improperly aligned.\nThe conversion source was improperly aligned.\nThe error emitted if the conversion source is improperly …\nThe error type of a failed allocation.\nThe error type of reference conversions.\nZerocopy’s generic error type.\nThe conversion source was of incorrect size.\nThe conversion source was of incorrect size.\nThe conversion source was of incorrect size.\nThe conversion source was of incorrect size.\nThe conversion source was of incorrect size.\nThe error emitted if the conversion source is of incorrect …\nThe error type of fallible reference conversions.\nThe error type of fallible read-conversions.\nThe conversion source contained invalid data.\nThe conversion source contained invalid data.\nThe conversion source contained invalid data.\nThe conversion source contained invalid data.\nThe conversion source contained invalid data.\nThe error emitted if the conversion source contains …\nReturns the argument unchanged.\nInfallibly discards the alignment error from this …\nReturns the argument unchanged.\nReturns the argument unchanged.\nInfallibly extracts the <code>SizeError</code> from this <code>CastError</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nProduces the source underlying the failed conversion.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.\nMaps the source value associated with the conversion error.")