<?php

/*
 * A simple class to build sql query string.
 * No messy things! Just give you a string(and the paramArray wen using parameterized sql)!
 *
 * (c) Lucas YU <lucasyu8.developer@gmail.com>
 * 
 * Usage:
 *		
 *		$sql = new SimpleQueryBuilder("SELECT * from user");
 *		$sql -> clauseWithParamArray("group = :group",
 *						array(":group" => "pupil"));
 *		$sql -> notNull("name");
 *		$sql -> orderBy("age");
 *		...
 *		if(!empty($limit)) $sql -> limit($limit);
 *		...
 *		$result = doa($sql->getSql(), $sql->getParam());
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

class SimpleQueryBuilder
{
	/*
	 *  private prop
	 */	
	private $sql;
	private $sqlOrderBy;
	private $sqlLimit;
	private $param;

	/*
	 *  Constructor
	 */
	function __construct($firstStm)
	{
		$this->sql   	 	= $firstStm;
		$this->param   		= array();
		$this->sqlOrderBy   = "";
		$this->sqlLimit 	= "";
	}	

	/*
	 *  Class Method
	 */
	public function firstStatement($firstStm)
	{
		$this->sql = $firstStm;
	}

	public function clause($clasue)
	{
		if (stripos($this->sql, 'WHERE') == false) 
		    $this->sql .= " WHERE "	. $clasue;
		else
			$this->sql .= " AND "	. $clasue;
	}

	public function clauseWithParamArray($clasue, $paramArr)
	{
		$this->addClause($clasue);
		$this->param = array_merge($this->param, $paramArr);		
	}

	public function notNull($notNull)
	{
		if (stripos($this->sql, 'WHERE') == false)
		    $this->sql .= " WHERE " . "$notNull is not null";
		else
		    $this->sql .= " AND "	. "$notNull is not null";
	}

	public function orderBy($orderBy)
	{
		$this->sqlOrderBy = " ORDER BY $orderBy";	
	}

	public function limit($limit)
	{
		$this->sqlLimit = " limit $limit";	
	}	

	/*
	 *  Output
	 */
	public function getSql()
	{
		return $this->sql . $this->sqlOrderBy . $this->sqlLimit;
	}	

	public function getParam()
	{
		return $this->param;
	}		

}

?>
