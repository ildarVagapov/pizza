import s from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../redux/filter/slice'
import { useCallback, useRef, useState } from 'react'
import debounce from 'lodash.debounce'

export const Search = () => {
	const [value, setValue] = useState('')
	const search = useSelector(state => state.filter.search)
	const dispatch = useDispatch()
	const inputRef = useRef()

	const clearSearch = () => {
		dispatch(setSearch(''))
		inputRef.current.focus()
	}

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearch(str))
		}, 500)
		, [])

	const onChangeInput = (str) => {
		setValue(str)
		updateSearchValue(str)
	}

	return (
		<div className={s.root}>
			<svg
				className={s.icon}
				enableBackground="new 0 0 32 32"
				id="EditableLine"
				version="1.1"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg">
				<circle
					cx="14"
					cy="14"
					fill="none"
					id="XMLID_42_"
					r="9"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="2"
				/>
				<line
					fill="none"
					id="XMLID_44_"
					stroke="#000000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit="10"
					strokeWidth="2"
					x1="27"
					x2="20.366"
					y1="27"
					y2="20.366"
				/>
			</svg>
			<input
				ref={inputRef}
				className={s.input}
				placeholder="Поиск пиццы..."
				onChange={(e) => onChangeInput(e.target.value)}
				value={value}
			/>
			{search &&
				<svg
					className={s.clearIcon}
					onClick={() => clearSearch()}
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
				</svg>
			}
		</div >
	)
}